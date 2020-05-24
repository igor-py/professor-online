import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Pool } from 'pg';
import config from '../config/postgres';
import authConfig from '../config/auth';
import { queries } from '../database/queries/user';

class SessionController {
  async SignIn(req, res) {
    const pool = new Pool(config);

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed' });
    }

    const { email, password } = req.body;

    let user;
    let tags;

    try {
      user = (await pool.query(queries.getUserByEmail(email))).rows[0];
      tags = (await pool.query(queries.getTagsByUserId(user.id))).rows;
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect Password.' });
    }
    console.log(user);
    const { id, name, isteacher, turn, rating } = user;

    return res.json({
      user: { id, name, email, isteacher, turn, rating, tags },
      token: jwt.sign({ id }, authConfig.secretString, {
        expiresIn: authConfig.expiration,
      }),
    });
  }
}

export default new SessionController();
