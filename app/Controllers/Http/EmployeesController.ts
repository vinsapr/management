import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {
  public async index({}: HttpContextContract) {
    const employees = await Employee.query()
    return employees
  }

  public async show({ params }: HttpContextContract) {
    try {
      const employee = await Employee.find(params.id)
      if (employee) {
        return employee
      } else {
        return {
          status: 200,
          message: `Data employee with ${params.id} not found`,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const employee = await Employee.find(params.id)
    if (employee) {
      employee.user_id = request.input('user_id')
      employee.first_name = request.input('first_name')
      employee.last_name = request.input('last_name')
      employee.gender = request.input('gender')
      employee.division = request.input('division')
      employee.level = request.input('last_name')

      if (await employee.save()) {
        return employee
      }
      return // 422
    }
    return // 401
  }

  public async store({ request }: HttpContextContract) {
    const employee = new Employee()
    employee.user_id = request.input('user_id')
    employee.first_name = request.input('first_name')
    employee.last_name = request.input('last_name')
    employee.gender = request.input('gender')
    employee.division = request.input('division')
    employee.level = request.input('level')
    await employee.save()
    return employee
  }

  public async destroy({ response }: HttpContextContract) {
    return response.json({ message: 'Deleted successfully' })
  }
}
