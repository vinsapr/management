import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'jhon.doe@mail.com',
        password: 'test123',
      },
      {
        email: 'newton@mail.com',
        password: 'admin',
      },
      {
        email: 'agus@mail.com',
        password: 'gusssss',
      },
      {
        email: 'bambang@mail.com',
        password: 'admin',
      },
      {
        email: 'tejo@mail.com',
        password: 'tejooo123',
      },
      {
        email: 'sukardi@mail.com',
        password: 'sukardiii',
      },
      {
        email: 'samsul@mail.com',
        password: 'samsul123',
      },
      {
        email: 'bari@mail.com',
        password: 'bahri123',
      },
    ])
  }
}
