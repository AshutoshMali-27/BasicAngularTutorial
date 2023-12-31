import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp1Component } from './Component/comp1/comp1.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserpipePipe } from './userpipe.pipe';
import { HeaderComponent } from './Component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './Component/child/child.component';
import { RedglDirective } from './Directives/redgl.directive';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    UserpipePipe,
    HeaderComponent,
    ChildComponent,
    RedglDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
