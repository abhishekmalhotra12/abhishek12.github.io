import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { LoaderModule } from './components/loader/loader.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [AppComponent, LandingComponent, LayoutComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, LoaderModule, ClickOutsideModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
