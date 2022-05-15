import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExerciseComponent } from './show-exercise.component';

describe('ShowExerciseComponent', () => {
  let component: ShowExerciseComponent;
  let fixture: ComponentFixture<ShowExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
