import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './root-component/index';
import { HomeComponent } from './pages/home/home.component';
import { PlaceAppComponent } from './pages/place-app/place-app.component';

import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { placeListComponent } from './cmps/place-list/place-list.component';
import { placePreviewComponent } from './cmps/place-preview/place-preview.component';
import { PlaceEditComponent } from './pages/place-edit/place-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceAppComponent,
    PlaceEditComponent,
    AppHeaderComponent,
    placeListComponent,
    placePreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
