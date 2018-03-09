import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { AnimationComponent } from './about/animation.component';
 

@NgModule({
  declarations: [
    AppComponent, AboutComponent,  AnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
