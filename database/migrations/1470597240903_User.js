'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('first_name');
      table.string('home_number');
      table.string('last_name');
      table.string('mobile_number');
      table.string('organization')
      table.string('category')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersSchema
