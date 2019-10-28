
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(users){
        users.increments();
        users.string('first_name').notNullable();
        users.string('last_name').notNullable();
        users.string('email').unique().notNullable();
        users.string('password').notNullable();
        users.string('city').notNullable();
        users.string('state').notNullable();
        users.string('zip').notNullable();
        users.timestamps(true, true);
    })
    .createTable('conditions', function(conditions){
        conditions.increments();
        conditions.string('condition').notNullable().unique();
    })
    .createTable('categories', function(category){
        category.increments();
        category.string('category').notNullable().unique();
    })
    .createTable('tools', function(tools){
        tools.increments();
        tools.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
        tools.timestamps(true, true);
        tools.string('title').notNullable();
        tools.string('make').notNullable().defaultTo('unknown');
        tools.string('model').notNullable().defaultTo('unknown');
        tools.string('description', 1000).notNullable();
        tools.integer('category_id').references('id').inTable('categories').unsigned().notNullable();
        tools.integer('condition_id').unsigned().notNullable().references('id').inTable('conditions').onDelete('CASCADE').onUpdate('CASCADE');
        tools.integer('daily_cost').unsigned().notNullable();
        tools.string('img_url').defaultTo('https://via.placeholder.com/150');
        tools.boolean('available').notNullable().defaultTo(true);
   })
    .createTable('rentals', function(rentals){
        rentals.increments();
        rentals.date('start_date').notNullable();
        rentals.date('end_date').notNullable();
        rentals.integer('total_cost').unsigned().notNullable();
        rentals.integer('tool_id').unsigned().notNullable().references('id').inTable('tools').onDelete('CASCADE').onUpdate('CASCADE');
        rentals.integer('renter_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    })
 };
  
   exports.down = function(knex) {
      return knex.schema.dropTableIfExists('rentals').dropTableIfExists('tools').dropTableIfExists('categories').dropTableIfExists('conditions').dropTableIfExists('users');
   };
  
