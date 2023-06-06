import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').nullable()
      table.string('gender').nullable()
      table.string('division').nullable()
      table.string('level')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
