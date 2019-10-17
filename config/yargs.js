const desc = {
    demand: true,
    alias: 'd',
    desc: 'todo task description'
}

const complete = {
    alias: 'c',
    desc: 'mark as complete or pendent a task'
}

const argv = require('yargs')
    .command('create', 'create a todo task', { desc })
    .command('update', 'update complete state of a task', { desc, complete })
    .command('erase', 'delete a todo task', { desc })
    .command('list', 'list todo tasks', { complete })
    .help()
    .argv;

module.exports = { argv };