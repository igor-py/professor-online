const createTagsTable = `
  DROP TABLE IF EXISTS Tags;

  CREATE TABLE Tags(
    ID SERIAL PRIMARY KEY,
    name           TEXT NOT NULL
  );
`;

export default createTagsTable;
