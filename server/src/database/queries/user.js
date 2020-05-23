const insertNewUser = (body) => `
  INSERT INTO public.users (name, email, password, isTeacher, turn, rating)
  VALUES ('${body.name}', '${body.email}', '${body.password}', 
  '${body.isTeacher}', '${body.turn}', '3');
`;

const insertTagsByUserId = (userId, tags) => `
  
`;

const getUserById = (id) => `SELECT * FROM public.users WHERE Id = ${id}`;

export const queries = {
  insertNewUser,
  insertTagsByUserId,
  getUserById,
};
