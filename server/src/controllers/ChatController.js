import * as Yup from 'yup';
import { Pool } from 'pg';
import config from '../config/postgres';
import { queries } from '../database/queries/chat';

class ChatController {
  getChat = async (req, res) => {
    const pool = new Pool(config);

    const { to, from } = req.query;

    const schema = Yup.object().shape({
      to: Yup.number().required(),
      from: Yup.number().required(),
    });

    if (!(await schema.isValid(req.query))) {
      return res.status(400).json({ error: 'Incorrect query format.' });
    }

    let messages;

    try {
      messages = (await pool.query(queries.getMessagesByUserIds(to, from)))
        .rows;
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    await pool.end();

    return res.status(200).json({ messages });
  };

  postMessage = async (req, res) => {
    const pool = new Pool(config);

    const { to, from } = req.query;

    const { content } = req.body;

    const schema = Yup.object().shape({
      to: Yup.number().required(),
      from: Yup.number().required(),
      content: Yup.string().required(),
    });

    if (!(await schema.isValid({ to, from, content }))) {
      return res.status(400).json({ error: 'Incorrect query format.' });
    }

    try {
      await pool.query(queries.insertNewMessage(content, from, to));
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e });
    }

    await pool.end();

    return res.status(200).json({ message: 'new message posted' });
  };
}

export default new ChatController();
