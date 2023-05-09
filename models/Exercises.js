const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercises extends Model {}

Exercises.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'exercise_categories',
        key: 'id',
      },
    },
    exercise_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funny_quip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'exercise_categories',
    //     key: 'id',
    //   },
    // },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercises',
  }
  
);


module.exports = Exercises;
