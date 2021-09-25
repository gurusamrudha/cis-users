// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGRX imports
import { StoreModule } from '@ngrx/store';

// Shared and store imports
import { SharedModule } from 'src/shared/shared.module';
import { UsersService } from '../services/users.service';
import { reducer } from './store/users.reducer';
import { getInitialState } from './store/users.state';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsComponent } from './user-details.component';


@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    StoreModule.forFeature('users', reducer, { initialState: getInitialState }),
    UsersRoutingModule
  ],
  exports: [UsersComponent],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
