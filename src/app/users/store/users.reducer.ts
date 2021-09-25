import { getInitialState, State } from './users.state';
import * as actions from './users.action';
import { UsersModel } from 'src/models/users.model';

export function reducer(state: State, action: actions.Actions): State {
    state = state || getInitialState();

    switch (action.type) {
        case actions.LOAD_USERS_LIST: {
            return { ...state, usersList: action.payload.users
                // usersListLoading: true, usersListLoadingError: undefined
             };
        }
        // case actions.LOAD_USERS_LIST_COMPLETE: {
        //     return { ...state, usersList: action.payload.users, usersListLoading: false, usersListLoadingError: undefined};
        // }
        // case actions.LOAD_USERS_LIST_FAILED: {
        //     return { ...state, usersListLoading: false, usersListLoadingError: action.payload.error}
        // }

        case actions.ADD_USER: {
            return { ...state, usersList: [ ...state.usersList, action.payload.userDetails ]};
        }
        case actions.DELETE_USER: {
            return { ...state, usersList: [ ...state.usersList.filter(({userId}) => userId !== action.payload.userId)] };
        }
        case actions.LOAD_USER_DETAILS: {
            const user: UsersModel = state.usersList.find(({userId}) => userId === action.payload.userId);
            return { ...state, userDetails: user };
        }
        case actions.UPDATE_USER: {
            const index = state.usersList.findIndex(user => user.userId === action.payload.userDetails.userId);
            const newArray = [...state.usersList];

            newArray[index] = action.payload.userDetails;
            return { ...state, usersList: newArray };
        }
        case actions.CLEAR_USER_DETAILS: {
            return { ...state, userDetails: undefined };
        }
    }
}
