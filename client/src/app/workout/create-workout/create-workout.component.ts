import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { WorkoutService } from '../../shared/workout.service';


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public workoutService: WorkoutService, private router: Router) { }

    
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.workoutService.postWorkout(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 10000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.workoutService.selectedWorkout = {
      name: '',
      description: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
