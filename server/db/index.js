const Sequelize = require('sequelize');

const sequelize = new Sequelize('eos_social', 'postgres', 'ENTER YOUR DB PASSWORD', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

// Testing db connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Db connection established');
  })
  .catch((error) => {
    console.error('Unable to connect to the db:', error);
  });

module.exports = sequelize;
