const createUserTagsTable = `
  DROP TABLE IF EXISTS UserTags;

  CREATE TABLE UserTags(
    ID INT PRIMARY KEY      NOT NULL,
    userId            INTEGER NOT NULL,
    tagId             INTEGER NOT NULL
  );
`;

export default createUserTagsTable;
