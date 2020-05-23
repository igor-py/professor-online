const createTagsTable = `
  DROP TABLE IF EXISTS Tags;

  CREATE TABLE Tags(
    ID INT PRIMARY KEY      NOT NULL,
    name           TEXT NOT NULL
  );
`;

export default createTagsTable;
