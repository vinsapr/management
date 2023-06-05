import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/Models/Employee'

export default class extends BaseSeeder {
  public async run() {
    await Employee.createMany([
      {
        user_id: 1,
        first_name: 'Jhon',
        last_name: 'Doe',
        gender: 'Male',
        division: 'Tech',
        level: 'Staff',
      },
      {
        user_id: 2,
        first_name: 'Isach',
        last_name: 'Newton',
        gender: 'Male',
        division: 'Finance',
        level: 'Staff',
      },
      {
        user_id: 3,
        first_name: 'Agus',
        last_name: 'Doang',
        gender: 'Male',
        division: 'Tech',
        level: 'Lead',
      },
      {
        user_id: 4,
        first_name: 'Bambang',
        last_name: 'Pamungkas',
        gender: 'Male',
        division: 'Marketing',
        level: 'Manager',
      },
      {
        user_id: 5,
        first_name: 'Tejo',
        last_name: 'Sutejo',
        gender: 'Male',
        division: 'HR',
        level: 'Staff',
      },
      {
        user_id: 6,
        first_name: 'Sukardi',
        last_name: 'Jaya',
        gender: 'Male',
        division: 'Operation',
        level: 'Lead',
      },
      {
        user_id: 7,
        first_name: 'Samsul',
        last_name: 'Merdeka',
        gender: 'Male',
        division: 'Sales',
        level: 'Lead',
      },
      {
        user_id: 8,
        first_name: 'Bahri',
        last_name: 'Bersama',
        gender: 'Male',
        division: 'Finance',
        level: 'Manager',
      },
    ])
  }
}
