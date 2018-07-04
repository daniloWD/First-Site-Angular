import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcondwComponent } from './procondw.component';

describe('ProcondwComponent', () => {
  let component: ProcondwComponent;
  let fixture: ComponentFixture<ProcondwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcondwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcondwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
