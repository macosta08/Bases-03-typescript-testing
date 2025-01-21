"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
];
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user);
}
