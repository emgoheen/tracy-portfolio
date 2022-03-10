import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule, 
    StoreModule.forRoot({}, {}), 
    EffectsModule.forRoot([]), 
    StoreDevtoolsModule.instrument({
      name: 'Portfolio App DevTools',
      maxAge: 25, 
      logOnly: environment.production })          // Shared (multi-instance) objects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
