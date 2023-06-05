import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'jhondoe',
        email: 'jhon.doe@mail.com',
        password: 'test123',
      },
      {
        username: 'newton',
        email: 'newton@mail.com',
        password: 'admin',
      },
      {
        username: 'Agus',
        email: 'agus@mail.com',
        password: 'gusssss',
      },
      {
        username: 'Bambang',
        email: 'bambang@mail.com',
        password: 'admin',
      },
      {
        username: 'Tejo',
        email: 'tejo@mail.com',
        password: 'tejooo123',
      },
      {
        username: 'Sukardi',
        email: 'sukardi@mail.com',
        password: 'sukardiii',
      },
      {
        username: 'Samsul',
        email: 'samsul@mail.com',
        password: 'samsul123',
      },
      {
        username: 'Bahri',
        email: 'bari@mail.com',
        password: 'bahri123',
      },
    ])
  }
}
