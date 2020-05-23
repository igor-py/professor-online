const createChatTable = `
  DROP TABLE IF EXISTS Chat;

  CREATE TABLE Chat(
    ID SERIAL PRIMARY KEY,
    content           TEXT NOT NULL,
    messageFrom           INTEGER NOT NULL,
    messageTo             INTEGER NOT NULL
  );
`;

export default createChatTable;
