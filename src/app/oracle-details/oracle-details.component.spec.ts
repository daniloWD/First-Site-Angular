import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleDetailsComponent } from './oracle-details.component';

describe('OracleDetailsComponent', () => {
  let component: OracleDetailsComponent;
  let fixture: ComponentFixture<OracleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
