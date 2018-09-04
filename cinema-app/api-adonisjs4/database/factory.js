'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/
 
const Factory = use('Factory')
const Hash = use('Hash');   /* lo usaremos para encriptar los passwords */


Factory.blueprint('App/Models/User', async (faker) => {
	/* le indicamos el modelo sobre el que actuará y que lo haga de manera asíncrona */
	return {
		username: faker.username(), 
		email: faker.email(),
		password: await Hash.make(faker.password()),   /* await se usa con async */
		created_at: faker.date()
	}
})

Factory.blueprint('App/Models/Customer', async (faker) => {
	return {
		user_id: async () => {
			return (await Factory.model('App/Models/User').create()).id
		},
		customer_phone: faker.phone(),
		customer_credit_card: faker.cc({type: 'Mastercard'})
	}
});