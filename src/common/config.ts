import { config } from 'dotenv-flow';
import * as path from 'path';

const root = path.join.bind(this, __dirname);
config({ path: root('../../') });

export default {
  PORT: process.env.PORT || 3000,
  ROOT_FOLDER: root('../../'),
  DB: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
