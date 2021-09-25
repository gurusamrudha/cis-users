// Angular imports
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// NGRX imports
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UsersModel } from 'src/models/users.model';

// Shared module imports
import { CisButtonsModule } from 'src/shared/cis-buttons/cis-buttons.module';
import { AddUserAction, DeleteUserAction, UpdateUserDetailsAction } from './store/users.action';
import { State } from './store/users.state';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let store: MockStore<State>;

  const initialState = {
    usersList: [],
    userDetails: {
        userId: '111-222',
        userName: 'Guru Test'
      }
    } as State;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        CisButtonsModule
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    store = TestBed.inject(Store) as MockStore<State>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should make the EmailAddress control required', () => {
    const control = component.form.get('emailAddress');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('Should make the UserId control required', () => {
    const control = component.form.get('userId');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('Should disable the save button', () => {
    expect(el.query(By.css('#saveButton'))).toBeFalsy();
  });

  it('Should enable the delete button upon userDetails value', () => {
    expect(el.query(By.css('#delete-user-button'))).toBeFalsy();

    component.userDetailsTemp = { userId: '111-222-333'};
    fixture.detectChanges();
    expect(el.query(By.css('#delete-user-button'))).toBeTruthy();
  });

  it('Should dispatch the DeleteUser action when removeUser is invoked', () => {
    const userDetails: UsersModel = {
      userId: '111-222',
      userName: 'Guru Test'
    };
    const action = new DeleteUserAction({ userId: userDetails.userId });
    const spy = spyOn(store, 'dispatch');

    fixture.detectChanges();

    component.userDetails = userDetails;
    component.removeUser();
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should dispatch the UpdateUser action when submit is invoked', () => {
    const userDetails: UsersModel = {
      userId: '111-222',
      userName: 'Guru Test',
      emailAddress: 'guru@samr.com',
      phone: 7777
    };
    const action = new UpdateUserDetailsAction({ userDetails });
    const spy = spyOn(store, 'dispatch');

    fixture.detectChanges();

    component.userDetails = userDetails;
    component.form.setValue(userDetails);
    component.submitUser();
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should dispatch the AddUser action when submit is invoked', () => {
    const userDetails: UsersModel = {
      userId: '111-222',
      userName: 'Guru Test',
      emailAddress: 'guru@samr.com',
      phone: 7777
    };
    const action = new AddUserAction({ userDetails });
    const spy = spyOn(store, 'dispatch');

    fixture.detectChanges();

    component.form.setValue(userDetails);
    component.submitUser();
    expect(spy).toHaveBeenCalledWith(action);
  });
});
