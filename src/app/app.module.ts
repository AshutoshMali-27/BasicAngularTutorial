import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp1Component } from './Component/comp1/comp1.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserpipePipe } from './userpipe.pipe';
import { HeaderComponent } from './Component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    UserpipePipe,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
