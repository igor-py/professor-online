/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
    {
      text: DataTypes.STRING,
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
    },
    {}
  );
  Chat.associate = function (models) {
    // associations can be defined here
  };
  return Chat;
};
