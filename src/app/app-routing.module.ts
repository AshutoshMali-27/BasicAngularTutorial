import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './Component/child/child.component';
import { Comp1Component } from './Component/comp1/comp1.component';
import { HeaderComponent } from './Component/header/header.component';
import { Child2Component } from './Component/child2/child2.component';

const routes: Routes = [
{
  path:'about',
  component:ChildComponent,

  children:[
    {
      path:'company',
      component:Child2Component
    },
    {
      path:'me',
      component:HeaderComponent
    }
  ]
},
{
  path:'user',
  component:Comp1Component
},

{
  path:'user/:id',
  component:Comp1Component
},
{
  path:'self',
  component:HeaderComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
