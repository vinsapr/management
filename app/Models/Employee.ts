import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public gender: string

  @column()
  public division: string

  @column()
  public level: string

  @column.dateTime()
  public hireDate: DateTime
}
