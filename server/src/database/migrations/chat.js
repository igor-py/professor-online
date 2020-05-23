const createChatTable = `
  DROP TABLE IF EXISTS Chat;

  CREATE TABLE Chat(
    ID INT PRIMARY KEY      NOT NULL,
    content           TEXT NOT NULL,
    messageFrom           INTEGER NOT NULL,
    messageTo             INTEGER NOT NULL
  );
`;

export default createChatTable;
