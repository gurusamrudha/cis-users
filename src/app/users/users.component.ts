// Angular imports
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// NGRX & other library imports
import { select, Store } from '@ngrx/store';

// Store and shared imports
import { State } from './store/users.state';
import * as actions from './store/users.action';
import * as selectors from './store/users.selectors';
import { UsersService } from '../services/users.service';
import { UsersModel } from 'src/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  reset: boolean;

  // Columns that ngx-datatable should show.
  columnHeaders = [{ prop: 'userId' }, { name: 'userName' }, { name: 'emailAddress' }, { name: 'phone'}];

  usersList$ = this.store.pipe(select(selectors.getUsersList));
  userDetails$ = this.store.pipe(select(selectors.getUserDetails));

  constructor(private readonly store: Store<State>, private usersService: UsersService) {}

  /**
   * Loads the User List from the dummy service file.
   *
   * TODO: Given an Http call, all these services could have taken place at side effects.
   * Did'nt include side effects, as no async http calls and no use in complexing solution.
   */
  ngOnInit(): void {
    this.store.dispatch(new actions.LoadUsersListAction({ users: this.usersService.users }));
  }

  /**
   * @param $event of type UsersModel is the row that user clicks on the UsersList
   * Upon row click an LoadUserDetail Action is kicked in and loads the User details state.
   */
  onRowClick($event: UsersModel): void {
    this.reset = false;
    this.store.dispatch(new actions.LoadUserDetailsAction({userId: $event.userId}));
  }

  /**
   * @param $event is an boolean value true to deselect all rows and false to select
   *  // Hacky:: To keep select and deselect work need to set this boolean value. NGX-datatable didnt provide much info!!
   */
  resetTable($event: boolean): void {
    this.reset = $event;
  }

}
