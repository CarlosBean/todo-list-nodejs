const fs = require('fs');
const colors = require('colors');
let listTodo = [];

const saveDB = () => {
    let data = JSON.stringify(listTodo);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('It cannot to save the task', err);
    })
}

const loadDB = () => {
    try {
        listTodo = require('../db/data.json');
    } catch (error) {
        listTodo = [];
    }
}

//CRUD
const create = (desc) => {
    loadDB();
    let todo = { desc, complete: false };
    listTodo.push(todo);
    saveDB();
    return todo;
}

const list = (complete = false) => {
    loadDB();
    const filteredList = listTodo.filter(task => task.complete === complete);
    const title = complete ? 'COMPLETE' : 'TO DO'

    if (filteredList.length <= 0) {
        console.log('Not found task ' + title);
        return;
    }

    for (const task of filteredList) {
        console.log(`=======${title}======`.green);
        console.log('desc : ', task.desc);
        console.log('state: ', task.complete);
        console.log('=================='.green);
    }
}

const update = (desc, complete = true) => {
    loadDB();
    let index = listTodo.findIndex(task => task.desc === desc);

    if (index >= 0) {
        listTodo[index].complete = complete;
        saveDB();
        return true;
    }

    return false;
}

const erase = (desc) => {
    loadDB();
    let index = listTodo.findIndex(task => task.desc === desc);

    if (index >= 0) {
        listTodo.splice(index, 1);
        saveDB();
        return true;
    }

    return false;
}

module.exports = { create, list, update, erase };