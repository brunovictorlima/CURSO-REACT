export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "SET_COLOR":
            return { ...state, color: action.payload };
        default:
            return state;
    };
};