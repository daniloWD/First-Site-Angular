import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiaoDetailsComponent } from './regiao-details.component';

describe('RegiaoDetailsComponent', () => {
  let component: RegiaoDetailsComponent;
  let fixture: ComponentFixture<RegiaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
