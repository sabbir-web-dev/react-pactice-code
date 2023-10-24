export const initialValue = {
  userData: [
    { id: 1, name: "Sabbir" },
    { id: 2, name: "Sani" },
  ],
};
export const reduce = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      const filter = state.userData.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        userData: filter,
      };
    case "ADD_USER":
      const newUser = {id:new Date().getTime().toString(),name:action.payload}
      return {
        ...state,
        userData : [...state.userData,newUser]
      };
    default:
      return state;
  }
};
