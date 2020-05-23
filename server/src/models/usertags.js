/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const UserTags = sequelize.define(
    'UserTags',
    {
      userId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {}
  );
  UserTags.associate = function (models) {
    // associations can be defined here
  };
  return UserTags;
};
