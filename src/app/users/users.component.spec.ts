// Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// NGRX imports
import { ReducerManager, StoreModule } from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';

import { UsersComponent } from './users.component';

function testReducer(state): ReducerManager {
  return state;
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        StoreModule.forRoot({ users: testReducer})
      ],
      providers: [provideMockStore({
        initialState: {
          users: {
            usersList: [],
            userDetails: {}
          }
        }
      })]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
