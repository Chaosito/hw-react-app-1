export const UsersReducer = (state, action) => {
    switch (action.type) {
        case "SetUser": return { ...state, user: action.payload };
        case "UnsetUser": return { ...state, user: null };
        default: return state;
    }
};
