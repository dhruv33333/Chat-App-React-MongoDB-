export const getSender = (loggedUser, users) => {
  return users[0]?._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]?._id === loggedUser?._id ? users[1] : users[0];
};

export const shouldDisplayAvatar = (messages, m, i, userId) => {
  return (
    (i === 0 && messages[i]?.sender?._id !== userId) ||
    (i > 0 &&
      messages[i - 1]?.sender?._id !== m?.sender?._id &&
      messages[i]?.sender?._id !== userId)
  );
};

// export const isLastMessage = (messages, i, userId) => {
//   return (
//     i === messages?.length - 1 &&
//     messages[messages?.length - 1]?.sender?._id !== userId &&
//     messages[messages?.length - 1]?.sender?._id
//   );
// };

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (m?.sender?._id === userId) return "auto";
  else if (shouldDisplayAvatar(messages, m, i, userId)) return 0;
  else return 35;
};

export const isPrevUserSame = (messages, m, i) => {
  return i > 0 && messages[i - 1]?.sender?._id === m?.sender?._id;
};
