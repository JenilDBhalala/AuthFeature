const sequelize = require('../../db/connection.db');
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'user',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter username!'
                }
            },
            set(value) {
                this.setDataValue('username', value.toLowerCase())
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email already in use, Please provide different email!'
            },
            validate: {
                notNull: {
                    msg: 'Email is required!'
                },
                isEmail: {
                    msg: 'Please enter valid email!'
                },
            },
            set(value) {
                this.setDataValue('email', value.toLowerCase())
            }
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
);

module.exports = User;