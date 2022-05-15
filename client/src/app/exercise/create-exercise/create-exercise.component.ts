import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ExerciseService } from '../../shared/exercise.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.exerciseService.postExercise(form.value).subscribe(
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
    this.exerciseService.selectedExercise = {
      parentName: '',
      name: '',
      description: '',
      sets: null,
      reps: null,
      duration: null
      
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
