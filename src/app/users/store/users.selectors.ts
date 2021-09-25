import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './users.state';

export const getFeatureState = createFeatureSelector<State>('users');

export const getUsersList = createSelector(getFeatureState, state => state.usersList);
// export const getUsersListLoading = createSelector(getFeatureState, state => state.usersListLoading);
// export const getUsersListLoadingError = createSelector(getFeatureState, state => state.usersListLoadingError);

export const getUserDetails = createSelector(getFeatureState, state => state.userDetails);
