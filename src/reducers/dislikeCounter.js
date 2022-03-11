const dislikeCounterReducer = (state = [], action) => {
  switch (action.type) {
    case "DISLIKE_INCREASE":
      const image = state.find((obj) => obj.id === action.payload);
      if (image) {
        return [...state, (image.likes = image.likes + 1)];
      } else {
        return [...state, { id: action.payload, likes: 1 }];
      }
  }
  return state;
};

export default dislikeCounterReducer;
