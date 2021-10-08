module.exports = {
  type: 'postgres',
  // host: process.env.RDS_HOSTNAME,
  host: 'db',
  port: process.env.RDS_PORT,
  // port: 5432,
  username: process.env.RDS_USERNAME,
  // username: 'postgres',
  password: process.env.RDS_PASSWORD,
  // password: 'postgres',
  database: process.env.RDS_DB_NAME,
  // database: 'nestjspractice',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  //   cli: {
  //     migrationsDir: 'src/database/migrations',
  //   },
};
