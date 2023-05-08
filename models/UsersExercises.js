const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserExercises extends Model {}

UserExercises.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    day_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'exercises',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users_exercises',
  }
);

module.exports = UserExercises;