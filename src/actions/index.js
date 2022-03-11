export const likeIncrease = (id) => {
  return {
    type: "LIKE_INCREASE",
    payload: id,
  };
};

export const dislikeIncrease = (id) => {
  return {
    type: "DISLIKE_INCREASE",
    payload: id,
  };
};
