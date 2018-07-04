import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMongoComponent } from './frame-mongo.component';

describe('FrameMongoComponent', () => {
  let component: FrameMongoComponent;
  let fixture: ComponentFixture<FrameMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
