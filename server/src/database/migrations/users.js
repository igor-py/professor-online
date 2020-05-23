const createUsersTable = `
  DROP TABLE IF EXISTS Users;

  CREATE TABLE Users(
    ID INT PRIMARY KEY      NOT NULL,
    name           TEXT NOT NULL,
    email          TEXT NOT NULL,
    password       TEXT NOT NULL,
    isTeacher      TEXT NOT NULL,
    turn           TEXT NOT NULL,
    rating         TEXT NOT NULL
  );
`;

export default createUsersTable;
