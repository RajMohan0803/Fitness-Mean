import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Workout } from "../../shared/workout.model";
import { WorkoutService } from '../../shared/workout.service';


@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.css']
})
export class ShowWorkoutComponent implements OnInit {

  workouts: Workout[];
  displayedColumns = ['name', 'description'];

  constructor(public workoutService: WorkoutService, private router: Router) { }

  ngOnInit() {

    this.fetchWorkouts();

   
  }

  fetchWorkouts() {
    this.workoutService
      .getWorkout()
      .subscribe((data: Workout[]) => {
        this.workouts = data;
        console.log('Data requested ...');
        console.log(this.workouts);
      });
  }
 

  
}
