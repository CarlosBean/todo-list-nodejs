const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');

const command = argv._[0];

switch (command) {
    case 'create':
        let task = todo.create(argv.desc);
        console.log(task);
        break;
    case 'update':
        let res = todo.update(argv.desc, argv.complete);
        console.log(res);
        break;
    case 'list':
        let list = todo.list(argv.complete);
        break;
    case 'erase':
        let erase = todo.erase(argv.desc);
        console.log(erase);
        break;
    default: console.log('Unknown command');
}