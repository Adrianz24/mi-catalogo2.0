import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Vista2Component } from './vista2/vista2.component';
import { TablaComponent } from './tabla/tabla.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'vista2',
    component: Vista2Component
  },
  
  {
    path: 'tabla',
    component: TablaComponent
  },
  {
    path:'', redirectTo: './tabla', pathMatch:'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
