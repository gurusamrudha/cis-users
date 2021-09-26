import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CisButtonStatePipe } from './cis-button-state.pipe';

import { CisButtonComponent } from './cis-button.component';

describe('CisButtonComponent', () => {
  let component: CisButtonComponent;
  let fixture: ComponentFixture<CisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CisButtonComponent, CisButtonStatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
