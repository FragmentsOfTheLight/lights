export default {
  database: [
    {
      engine: 'mysql',
      host: 'localhost',
      database: 'flights',
      username: 'root',
      password: '',
    },
    {
      engine: 'postgres',
      host: '127.0.0.1',
      database: 'ro2',
      username: 'root',
      password: '',
    },
  ],
  storage: {
    adapter: 'yaml',
  },
  providers: ['config', 'cache', 'auth', 'log', 'monitor'],
}
