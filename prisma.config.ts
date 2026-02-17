import path from 'node:path';
import { defineConfig, env } from 'prisma/config';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log('DATABASE_URL', env('DATABASE_URL'));

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
  datasource: {
    url: env('DATABASE_URL')
  }
});
