// Angular imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// NGRX & other library imports
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

// Store and shared imports
import { State } from './store/users.state';
import * as actions from './store/users.action';
import { UsersModel } from 'src/models/users.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  form: FormGroup;
  userDetailsTemp: UsersModel;

  /**
   * Patches the UserDetail values to the form
   */
  @Input()
  set userDetails(userDetails: UsersModel) {
    if (userDetails && userDetails?.userId) {
      this.form.patchValue(userDetails);
    }
    this.userDetailsTemp = userDetails;
  }
  get userDetails(): UsersModel {
    return this.userDetailsTemp;
  }

  @Output()
  resetTable = new EventEmitter<boolean>();

  constructor(private readonly store: Store<State>, private fb: FormBuilder) { }

  /**
   * Removes the selected used and reset the form
   */
  removeUser(): void {
    this.store.dispatch(new actions.DeleteUserAction({userId: this.userDetails.userId}));
    this.resetUserForm();
  }

  /**
   * Initialises the form
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      userId: [{value: uuidv4(), disabled: true}, Validators.required],
      userName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phone: []
    });
  }

  /**
   * Uses the 3rd part MIT licensed UUID librabry to generate an universal unique ID
   */
  generateNewId(): void {
    this.form.get('userId').setValue(uuidv4());
    this.form.updateValueAndValidity();
  }

  /**
   * Updates the form if User is being selected and add the new User if not.
   */
  submitUser(): void {
    if (this.userDetails) {
      this.store.dispatch(new actions.UpdateUserDetailsAction({userDetails: this.form.getRawValue() as UsersModel}));
    } else {
      this.store.dispatch(new actions.AddUserAction({userDetails: this.form.getRawValue() as UsersModel}));
    }
    this.resetUserForm();
  }

  /**
   * Resets the form and deselects the datatable selection
   */
  resetUserForm(): void {
    this.store.dispatch(new actions.ClearUserDetailsAction());
    this.resetTable.emit(true);
    this.form.reset();
    this.form.updateValueAndValidity();
  }
}
