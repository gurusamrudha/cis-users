import { UsersModel } from 'src/models/users.model';

export interface State {
    usersList?: UsersModel[];
    // usersListLoading?: boolean;
    // usersListLoadingError?: string;

    userDetails?: UsersModel;
}

export function getInitialState(): State {
    return {
        usersList: [],
        // usersListLoading: false,
        // usersListLoadingError: '',

        userDetails: {}
    };
}
