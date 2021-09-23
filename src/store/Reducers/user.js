import { USER_LOGIN, USER_SIGNIN,USER_AUTH, USER_LOGOUT } from "../Types/index";


const initialState = {
    uid: "",
    isLogged:false,
};


export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state, uid: payload };
        case USER_SIGNIN:
            return { ...state, uid: payload.uid , isLogged: true };
        case USER_AUTH:
            return { ...state, isLogged: true }
        case USER_LOGOUT:
            return {isLogged: false}
        default:
            return {};
    }
}