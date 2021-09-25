
import { UsersModel } from 'src/models/users.model';
import {
    LoadUsersListAction,
    AddUserAction,
    DeleteUserAction
    } from './users.action';
import { reducer } from './users.reducer';
import { getInitialState } from './users.state';

const initialState = getInitialState();

describe('Users Reducer', () => {
  const mockUser: UsersModel = {
   userId: '111',
   userName: 'GuruTest'
  };

  describe('Add Users', () => {
    it('should add to the users list', () => {
      const action = new AddUserAction({ userDetails: mockUser});
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        usersList: [{
            userId: '111',
            userName: 'GuruTest'
            }],
      });
    });
  });

  describe('Load Users List', () => {
    it('should load users list', () => {
      const action = new LoadUsersListAction({users: [{userId: '111'}, {userId: '222'}]});
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        usersList: [{
                userId: '111',
            },
            {
                userId: '222'
            }],
      });
    });
  });

  describe('Delete User', () => {
    it('should delete user from list', () => {
      const action = new DeleteUserAction({userId: '111'});
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        usersList: [],
      });
    });
  });
});
