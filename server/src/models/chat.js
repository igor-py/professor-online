import Sequelize, { Model } from 'sequelize';

class Chat extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        from: Sequelize.INTEGER,
        to: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Chat;
