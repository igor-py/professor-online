const getMessagesByUserIds = (messageToId, messageFromId) => `
  SELECT * FROM public.chat WHERE (messagefrom = ${messageFromId} AND messageto = ${messageToId})
  OR (messagefrom = ${messageToId} AND messageto = ${messageFromId}) LIMIT 50;
`;

const insertNewMessage = (content, messageFromId, messageToId) => `
  INSERT INTO public.chat (content, messageFrom, messageTo) VALUES ('${content}', ${messageFromId}, ${messageToId});
`;

export const queries = {
  getMessagesByUserIds,
  insertNewMessage,
};
