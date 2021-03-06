'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, {
        foreignKey: 'theme_id',
      });
    }
  }
  Question.init({
    text: DataTypes.TEXT,
    answer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
