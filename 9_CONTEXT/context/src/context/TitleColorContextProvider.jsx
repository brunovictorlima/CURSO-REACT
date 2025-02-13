import { useReducer } from "react";
import PropTypes from "prop-types";
import { TitleColorContext } from "./TitleColorContext";
import { titleColorReducer } from "../reducers/TitleColorReducer";

const initialState = { color: "purple" };

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, initialState);

    const setColor = (color) => {
        dispatch({ type: "SET_COLOR", payload: color });
    };

    return <TitleColorContext.Provider value={{ color: state.color, setColor }}>
            {children}
        </TitleColorContext.Provider>
};

TitleColorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

