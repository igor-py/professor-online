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

    console.log('userCheck', userCheck);

    if (userCheck) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    let insertUserResult;

    try {
      insertUserResult = await pool.query(queries.insertNewUser(req.body));
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    /*
    let insertTagsResult;

    if (req.body.tags.length > 0) {
      try {
        insertTagsResult = pool.query(
          queries.insertTagsByUserId(1, req.body.tags)
        );
      } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e });
      }
    }
    */

    await pool.end();

    return res.status(200).json({
      insertUserResult,
    });
  };

  updateTags = async (req, res) => {};

  getByTags = async (req, res) => {};

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

    pool.end();
    return res.status(200).json({ user: result });
  };

  userExists = async (email = '', id = 0) => {
    const pool = new Pool(config);

    const checkForUserQuery = `
      SELECT * FROM public.users WHERE email = '${email}' OR id = ${id};
    `;

    let result;

    try {
      result = await pool.query(checkForUserQuery);
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
