import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public gender: string

  @column()
  public division: string

  @column()
  public level: string

  @column.dateTime()
  public hireDate: DateTime
}
