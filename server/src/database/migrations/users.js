const createUsersTable = `
  DROP TABLE IF EXISTS Users;

  CREATE TABLE Users(
    ID INT PRIMARY KEY      NOT NULL,
    name           CHAR(50) NOT NULL,
    email          CHAR(50) NOT NULL,
    password       CHAR(50) NOT NULL,
    isTeacher      CHAR(50) NOT NULL,
    turn           CHAR(50) NOT NULL,
    rating         CHAR(50) NOT NULL
  );
`;

export default createUsersTable;
