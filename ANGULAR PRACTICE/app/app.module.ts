import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Remove `AppComponent` from here
  ],
  imports: [
    BrowserModule,
    AppComponent // Add it here if you need to use it within this module
  ],
  bootstrap: [AppComponent] // or whatever component you want to bootstrap
})
export class AppModule { }

