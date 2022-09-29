import { IUser } from "./App";

type InitialStateType = {
    user: IUser | null;
}

export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
};

const reducer = (state: InitialStateType, action: any) => {
    console.log({ action });
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
}

export default reducer;