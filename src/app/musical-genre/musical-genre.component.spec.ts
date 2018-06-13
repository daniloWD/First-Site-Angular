import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalGenreComponent } from './musical-genre.component';

describe('MusicalGenreComponent', () => {
  let component: MusicalGenreComponent;
  let fixture: ComponentFixture<MusicalGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
