import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceAppComponent } from './pages/place-app/place-app.component';
import { PlaceEditComponent } from './pages/place-edit/place-edit.component';
import { PlaceResolverService } from './services/place-resolver.service';

const routes: Routes = [
  { path: 'edit/:id', component: PlaceEditComponent, resolve: { place: PlaceResolverService } },
  { path: 'edit', component: PlaceEditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'place', component: PlaceAppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

