import type { Config } from "drizzle-kit";

export default {
  out: './src/migrations',
  schema: './src/schema/**/*.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@localhost:5432/kabootr",
  },
  casing: 'snake_case',
  schemaFilter: 'postgres',
  strict: true,
  verbose: true,
  migrations: {
    prefix: 'timestamp',
    table: '__drizzle_migrations__',
    schema: 'postgres',
  },
} satisfies Config;
