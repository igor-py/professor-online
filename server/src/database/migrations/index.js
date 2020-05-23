import { Pool } from 'pg';
import config from '../../config/postgres';
import createUsersTable from './users';
import createTagsTable from './tags';
import createChatTable from './chat';
import createUserTagsTable from './userTags';

const pool = new Pool(config);

pool.query(createUsersTable);
pool.query(createTagsTable);
pool.query(createUserTagsTable);
pool.query(createChatTable);

pool.end();
