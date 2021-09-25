import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisDatatableComponent } from './cis-datatable.component';

describe('CisDatatableComponent', () => {
  let component: CisDatatableComponent;
  let fixture: ComponentFixture<CisDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CisDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CisDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
