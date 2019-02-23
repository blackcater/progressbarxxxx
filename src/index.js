const commander = require('commander');

const Progress = require('./progess');
const packageJSON = require('../package');

commander
  .version(packageJSON.version)
  .option('-t, --type <type>', '', 'day')
  .option('-c, --color <color>', '', 'bgCyan')
  .option('-w, --width <width>', '', 50)
  .option('-a, --no-animate', '', true)
  .parse(process.argv);

new Progress({
  type: commander.type,
  animate: commander.animate,
  color: commander.color,
  width: commander.width,
}).run();
