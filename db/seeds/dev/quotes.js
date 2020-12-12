
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {
          id: 1,
          client_name: 'Mark',
          client_email: 'mark@email.com',
          company_contact: 'Bill',
          point_of_departure: 'YYJ',
          point_of_destination: 'YVR',
          number_of_passengers: 4,
          transportation: 'Taxi',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
        {
          id: 2,
          client_name: 'Mike',
          client_email: 'mike@email.com',
          company_contact: 'Jenn',
          point_of_departure: 'YYZ',
          point_of_destination: 'YEG',
          number_of_passengers: 2,
          transportation: 'Bus',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
        {
          id: 3,
          client_name: 'Erin',
          client_email: 'erin@email.com',
          company_contact: 'Bill',
          point_of_departure: 'YYC',
          point_of_destination: 'LAX',
          number_of_passengers: 1,
          transportation: 'Limosine',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
        {
          id: 4,
          client_name: 'Hannah',
          client_email: 'hannah@email.com',
          company_contact: 'Brian',
          point_of_departure: 'YQM',
          point_of_destination: 'YHZ',
          number_of_passengers: 3,
          transportation: 'Rental',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
        {
          id: 5,
          client_name: 'Patty',
          client_email: 'patty@email.com',
          company_contact: 'Debbie',
          point_of_departure: 'YWG',
          point_of_destination: 'YVR',
          number_of_passengers: 1,
          transportation: 'Taxi',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
        {
          id: 6,
          client_name: 'Sean',
          client_email: 'sean@email.com',
          company_contact: 'Debbie',
          point_of_departure: 'YYZ',
          point_of_destination: 'HNL',
          number_of_passengers: 2,
          transportation: 'Taxi',
          depature_date: '2020-11-12T00:00:00-07:00',
          return_date: '2020-11-16T00:00:00-07:00'
        },
      ]);
    });
};
