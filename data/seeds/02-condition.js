
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("conditions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("conditions").insert([
        {
          condition: "Excellent"
        },
        {
          condition: "Good"
        },
        {
          condition: "Fair"
        },
        {
          condition: "Poor"
        }
      ]);
    });
};
