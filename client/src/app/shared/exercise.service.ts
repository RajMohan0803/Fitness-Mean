import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Exercise } from "./exercise.model";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {

  selectedExercise: Exercise = {
    parentName: '',
    name: '',
    description: '',
    sets: null,
    reps: null,
    duration: null

  };

  constructor(private http: HttpClient) { }

  getExercise() {
    return this.http.get(environment.apiBaseUrl + '/getExercises');
  }

  postExercise(exercise: Exercise) {
    return this.http.post(environment.apiBaseUrl + '/postExerciseProgram', exercise);
  }

}
