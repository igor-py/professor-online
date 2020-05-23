const createUserTagsTable = `
  DROP TABLE IF EXISTS UserTags;

  CREATE TABLE UserTags(
    ID SERIAL PRIMARY KEY,
    userId            INTEGER NOT NULL,
    tagId             INTEGER NOT NULL
  );
`;

export default createUserTagsTable;
