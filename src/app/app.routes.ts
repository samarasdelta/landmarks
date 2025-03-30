import { Routes } from '@angular/router';
import { LandmarkDetailComponent } from './landmark-detail/landmark-detail.component';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';

export const routes: Routes = [
  { path: '', component: LandmarkListComponent },
  { path: ':title', component: LandmarkDetailComponent }
];
