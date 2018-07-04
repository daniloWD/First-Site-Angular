import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuMongoComponent } from './sub-menu-mongo.component';

describe('SubMenuMongoComponent', () => {
  let component: SubMenuMongoComponent;
  let fixture: ComponentFixture<SubMenuMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
