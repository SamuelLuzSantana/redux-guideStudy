import UserActionTypes from "./action-types"

const inicialState = {
    currentUser: null,
}

const userReducer = (state = inicialState, action) => {

    switch (action.type) {
        case UserActionTypes.LOGIN:
            return { currentUser: action.payload }

        case UserActionTypes.LOGOUT:
            return { currentUser: null }

        default:
          return  state;
    }
};

export default userReducer;