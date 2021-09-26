import { Action } from '@ngrx/store';
import { UsersModel } from 'src/models/users.model';

export const LOAD_USERS_LIST                =   'Load Users List';
// export const LOAD_USERS_LIST_FAILED         =   'Load Users List Failed';
// export const LOAD_USERS_LIST_COMPLETE       =   'Load Users List Complete';

export const LOAD_USER_DETAILS              =   'Load User Details';

export const ADD_USER                       =   'Add User To Users List';
export const DELETE_USER                    =   'Delete User From Users List';
export const UPDATE_USER                    =   'Update User From Users List';
export const CLEAR_USER_DETAILS             =   'Clear User Details';

export class LoadUsersListAction implements Action {
    readonly type = LOAD_USERS_LIST;
    constructor(public payload: { users: UsersModel[] }) {}
}

export class AddUserAction implements Action {
    readonly type = ADD_USER;
    constructor(public payload: { userDetails: UsersModel }) {}
}

export class DeleteUserAction implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: { userId: string }) {}
}

export class LoadUserDetailsAction implements Action {
    readonly type = LOAD_USER_DETAILS;
    constructor(public payload: { userId: string }) {}
}

export class UpdateUserDetailsAction implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload: { userDetails: UsersModel }) {}
}

export class ClearUserDetailsAction implements Action {
    readonly type = CLEAR_USER_DETAILS;
}

/**
 * Commenting this code to show what it looks like if it was a http call and
 * we use loading spinner or error message on each HTTP calls.
 */

// export class LoadUsersListCompleteAction implements Action {
//     readonly type = LOAD_USERS_LIST_COMPLETE;
//     constructor(public payload: { users: UsersModel[] }) {}
// }

// export class LoadUsersListFailedAction implements Action {
//     readonly type = LOAD_USERS_LIST_FAILED;
//     constructor(public payload: { error: string }) {}
// }

export type Actions =
    LoadUsersListAction |
    // LoadUsersListCompleteAction |
    // LoadUsersListFailedAction |
    AddUserAction |
    DeleteUserAction |
    LoadUserDetailsAction |
    UpdateUserDetailsAction |
    ClearUserDetailsAction;
