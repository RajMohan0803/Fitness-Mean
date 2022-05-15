import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Exercise } from "../../shared/exercise.model";
import { ExerciseService } from "../../shared/exercise.service";

@Component({
  selector: 'app-show-exercise',
  templateUrl: './show-exercise.component.html',
  styleUrls: ['./show-exercise.component.css']
})
export class ShowExerciseComponent implements OnInit {

  exercises: Exercise[];
  displayedColumns = ['parentName', 'name', 'description', 'sets', 'reps', 'duration'];

  constructor(public exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {
    this.fetchExercises();
  }

  fetchExercises() {
    this.exerciseService
      .getExercise()
      .subscribe((data: Exercise[]) => {
        this.exercises = data;
        console.log('Data requested ...');
        console.log(this.exercises);
      });
  }

}
