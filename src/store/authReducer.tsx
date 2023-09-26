import React from "react";
interface ActionProp {
    type: String,
    payload?: any
}
const initialState: any = {
    isLogin: false,
    user: null,
}


const authReducer = (state = initialState, action: ActionProp) => {
    switch (action.type) {
        case "Login": {
            const { user } = action.payload;
            return {
                ...state,
                isLogin: true,
                user
            }
        }
        case "Logout": {
            return {
                ...state,
                isLogin: false,
                user: null
            }
        }
        default: {
            return { ...state };
        }
    }
}

export default authReducer;