import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Workout } from "./workout.model";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  selectedWorkout: Workout = {
    name: '',
    description: ''

  };

  constructor(private http: HttpClient) { }

  getWorkout() {
    return this.http.get(environment.apiBaseUrl + '/getWorkouts');
  }

  postWorkout(workout: Workout) {
    return this.http.post(environment.apiBaseUrl + '/postWorkoutProgram', workout)
  }

}
