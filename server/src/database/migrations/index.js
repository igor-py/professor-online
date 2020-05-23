import { Pool } from 'pg';
import config from '../../config/postgres';
import createUsersTable from './users';

const pool = new Pool(config);

pool.query(createUsersTable);

pool.end();
