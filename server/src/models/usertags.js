import Sequelize, { Model } from 'sequelize';

class UserTags extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        tagId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default UserTags;
