const insertNewUser = (body) => `
  INSERT INTO public.users (name, email, password, isTeacher, turn, rating)
  VALUES ('${body.name}', '${body.email}', '${body.password}', 
  '${body.isTeacher}', '${body.turn}', '3');
`;

const insertTagsByUserId = (userId, tagIds) => {
  let values = [];

  tagIds.forEach((el) => {
    values.push(`(${userId}, ${el})`);
  });

  values = values.join(',');

  return `
    INSERT INTO public.userTags (userId, tagId)
    VALUES ${values};
  `;
};

const deleteTagsByUserId = (userId) => `
  DELETE FROM public.userTags WHERE userId = ${userId}
`;

const getTagsByUserId = (userId) => `
  SELECT * FROM public.userTags WHERE userId = ${userId}
`;

const getUserById = (id) => `SELECT * FROM public.users WHERE Id = ${id}`;

const getUserByEmail = (email) =>
  `SELECT * FROM public.users WHERE email = '${email}'`;

const checkForExistingUser = (email, id) => `
  SELECT * FROM public.users WHERE email = '${email}' OR id = ${id};
`;
const getUserIdsByTagIds = (tagIds) => `
  SELECT DISTINCT userId FROM public.userTags WHERE tagId IN (${tagIds})
`;

export const queries = {
  insertNewUser,
  insertTagsByUserId,
  deleteTagsByUserId,
  getUserById,
  getUserByEmail,
  checkForExistingUser,
  getUserIdsByTagIds,
  getTagsByUserId,
};
