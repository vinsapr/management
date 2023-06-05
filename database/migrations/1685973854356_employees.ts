import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('userId').unique().notNullable()
      table.string('firstName').notNullable()
      table.string('lastName').notNullable()
      table.string('gender').notNullable()
      table.string('division').notNullable()
      table.string('level').notNullable()
      table.dateTime('hireDate', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
