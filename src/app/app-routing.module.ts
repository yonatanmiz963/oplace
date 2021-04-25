import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { placeAppComponent } from './pages/place-app/place-app.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'place', component: placeAppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

