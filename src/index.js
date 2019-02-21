const commander = require('commander');

const Progress = require('./progess');
const packageJSON = require('../package');

commander
  .version(packageJSON.version)
  .option('-d, --days', '', false)
  .option('-c, --color <color>', '', 'pink')
  .option('-t, --theme <theme>', '', 'solid')
  .parse(process.argv);

new Progress().run();
