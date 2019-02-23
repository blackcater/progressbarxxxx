const commander = require('commander');

const Progress = require('./progess');
const packageJSON = require('../package');

commander
  .version(packageJSON.version)
  .option('-t, --type <type>', 'Type of output', 'day')
  .option('-c, --color <color>', 'Color of progress', 'bgCyan')
  .option('-w, --width <width>', 'Width of progress', 50)
  .option('-a, --no-animate', 'Whether show animation', true)
  .parse(process.argv);

new Progress({
  type: commander.type,
  animate: commander.animate,
  color: commander.color,
  width: commander.width,
}).run();
