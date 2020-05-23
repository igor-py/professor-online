const createUsersTable = `
  DROP TABLE IF EXISTS Users;

  CREATE TABLE Users(
    ID SERIAL PRIMARY KEY,
    name           TEXT NOT NULL,
    email          TEXT NOT NULL,
    password       TEXT NOT NULL,
    isTeacher      TEXT NOT NULL,
    turn           TEXT NOT NULL,
    rating         TEXT NOT NULL
  );
`;

export default createUsersTable;
