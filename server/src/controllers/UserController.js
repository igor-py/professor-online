import * as Yup from 'yup';
import { Pool } from 'pg';
import config from '../config/postgres';
import { queries } from '../database/queries/user';

class UserController {
  createUser = async (req, res) => {
    const pool = new Pool(config);

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      isTeacher: Yup.boolean().required(),
      turn: Yup.string().required(),
      tags: Yup.array(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect body format.' });
    }

    const userCheck = await this.userExists(req.body.email);

    if (userCheck) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    let newUser;

    try {
      await pool.query(queries.insertNewUser(req.body));
      newUser = (await pool.query(queries.getUserByEmail(req.body.email)))
        .rows[0];
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    if (req.body.tags.length > 0) {
      try {
        await pool.query(queries.insertTagsByUserId(newUser.id, req.body.tags));
      } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e });
      }
    }

    await pool.end();

    return res.status(200).json(newUser);
  };

  updateTags = async (req, res) => {
    const pool = new Pool(config);

    const id = req.params.id;

    const schema = Yup.object().shape({
      tags: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect body format.' });
    }

    const userCheck = await this.userExists('', id);

    if (!userCheck) {
      return res.status(400).json({ error: 'User does not exist.' });
    }

    if (req.body.tags.length > 0) {
      try {
        await pool.query(queries.deleteTagsByUserId(id));
        await pool.query(queries.insertTagsByUserId(id, req.body.tags));
      } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e });
      }
    }

    await pool.end();

    return res.status(200).json({ meesage: 'new tags added' });
  };

  getUsersByTags = async (req, res) => {
    const pool = new Pool(config);

    const schema = Yup.object().shape({
      tags: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Incorrect body format.' });
    }

    let users;

    if (req.body.tags.length > 0) {
      try {
        users = (await pool.query(queries.getUserIdsByTagIds(req.body.tags)))
          .rows;
      } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e });
      }
    }

    await pool.end();

    return res.status(200).json({ users });
  };

  getById = async (req, res) => {
    const pool = new Pool(config);

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'Must provide Id' });
    }

    let result;

    try {
      result = await pool.query(queries.getUserById(id));
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    if (result.rowCount === 0) {
      return res.status(400).json({ error: 'User not found' });
    } else {
      result = result.rows;
    }

    await pool.end();

    return res.status(200).json({ user: result });
  };

  userExists = async (email = '', id = 0) => {
    const pool = new Pool(config);

    let result;

    try {
      result = await pool.query(queries.checkForExistingUser(email, id));
    } catch (e) {
      throw e;
    }

    await pool.end();

    if (result.rowCount === 0) {
      return false;
    }

    return true;
  };
}

export default new UserController();
