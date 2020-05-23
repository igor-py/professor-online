import * as Yup from 'yup';
import { Pool } from 'pg';
import config from '../config/postgres';

class UserController {
  async create(req, res) {
    const pool = new Pool();

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      isTeacher: Yup.boolean().required(),
      turn: Yup.string().required(),
      rating: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const query = 'INSERT INTO public.user';

    const userExists = await User.findOne({ where: { email: req.body.email } });

    console.log(userExists);

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, isTeacher, turn, rating } = await User.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      isTeacher,
      turn,
      rating,
    });
  }

  async getById(req, res) {
    const pool = new Pool(config);

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'Must provide Id' });
    }

    const query = `SELECT * FROM public.users WHERE Id = ${id}`;

    let result;

    try {
      result = await pool.query(query);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    if (result.rowCount === 0) {
      return res.status(400).json({ error: 'User not found' });
    } else {
      result = result.rows;
    }

    console.log(result);

    pool.end();
    return res.status(200).json({ user: result });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name } = await User.findByPk(req.userId);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
