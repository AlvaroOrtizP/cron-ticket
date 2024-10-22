const cron = require('node-cron');

let times=0;

cron.schedule('*/5 * * * * *', () => {
  console.log('Tick cada 5 segundos', times);
});
console.log('Inicio');
