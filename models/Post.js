//set up post model
const { stubFalse } = require('lodash');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        post_contents: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post