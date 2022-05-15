import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from 'material.module';

import { WorkoutService } from './shared/workout.service';
import { ExerciseService } from './shared/exercise.service';
import { UserService } from './shared/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserhomeComponent } from './userhome/userhome.component';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { IndexComponent } from './index/index.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

import { WorkoutComponent } from './workout/workout.component';
import { ShowWorkoutComponent } from './workout/show-workout/show-workout.component';
import { CreateWorkoutComponent } from './workout/create-workout/create-workout.component';

import { ExerciseComponent } from './exercise/exercise.component';
import { ShowExerciseComponent } from './exercise/show-exercise/show-exercise.component';
import { CreateExerciseComponent } from './exercise/create-exercise/create-exercise.component';

const routes: Routes = [
  {
    path: 'addWorkout',
    component: WorkoutComponent,
    children: [{ path: '', component: CreateWorkoutComponent }],
    canActivate: [AuthGuard],
  },

  {
    path: 'workouts',
    component: WorkoutComponent,
    children: [{ path: '', component: ShowWorkoutComponent }],
  },

  {
    path: 'addExercise',
    component: ExerciseComponent,
    children: [{ path: '', component: CreateExerciseComponent }],
    canActivate: [AuthGuard],
  },

  {
    path: 'exerciseList',
    component: ExerciseComponent,
    children: [{ path: '', component: ShowExerciseComponent }],
    canActivate: [AuthGuard],
  },

  { path: 'homepage', component: UserhomeComponent },

  {
    path: 'register',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },

  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },

  { path: 'index', component: IndexComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    IndexComponent,

    UserComponent,
    SignUpComponent,
    SignInComponent,

    WorkoutComponent,
    ShowWorkoutComponent,
    CreateWorkoutComponent,

    ExerciseComponent,
    ShowExerciseComponent,
    CreateExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [
    WorkoutService,
    ExerciseService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
