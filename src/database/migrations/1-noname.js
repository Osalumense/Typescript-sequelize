'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2023-08-02T10:20:27.121Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "id": {
                "type": Sequelize.UUID,
                "field": "id",
                "primaryKey": true
            },
            "firstName": {
                "type": Sequelize.STRING,
                "field": "firstName"
            },
            "lastName": {
                "type": Sequelize.STRING,
                "field": "lastName"
            },
            "email": {
                "type": Sequelize.STRING,
                "field": "email",
                "unique": true
            },
            "phoneNumber": {
                "type": Sequelize.STRING,
                "field": "phoneNumber",
                "unique": true,
                "allowNull": true
            },
            "password": {
                "type": Sequelize.STRING,
                "field": "password",
                "allowNull": false
            },
            "dob": {
                "type": Sequelize.DATE,
                "field": "dob",
                "allowNull": true
            },
            "status": {
                "type": Sequelize.ENUM('active', 'inactive'),
                "field": "status",
                "defaultValue": "active",
                "allowNull": false
            },
            "token": {
                "type": Sequelize.STRING,
                "field": "token"
            },
            "tokenExpire": {
                "type": Sequelize.DATE,
                "field": "tokenExpire"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            },
            "deletedAt": {
                "type": Sequelize.DATE,
                "field": "deletedAt"
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
