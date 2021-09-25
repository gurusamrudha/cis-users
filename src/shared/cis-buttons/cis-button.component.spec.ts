import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisButtonComponent } from './cis-button.component';

describe('CisButtonComponent', () => {
  let component: CisButtonComponent;
  let fixture: ComponentFixture<CisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CisButtonComponent ]
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
