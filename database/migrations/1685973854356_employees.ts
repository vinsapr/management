import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_id').unique().notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('gender').notNullable()
      table.string('division').notNullable()
      table.string('level').notNullable()
      table.dateTime('hire_date', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
