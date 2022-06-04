const userService = require('./user.service');

module.exports = {
    '/getUser': function () {
        return userService.UserService.getAllUsers();
    },
    '/postUser': async function (req) {
        return userService.UserService.addUser(await parseData(req));
    },
    '/putUser': async function (req) {
        return userService.UserService.updateUser(await parseData(req));
    },
    '/deleteUser': async function (req) {
        return userService.UserService.deleteUser(await parseData(req));
    },
};

async function parseData(req) {
    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();

    return JSON.parse(data);
}
