import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
/** 
*import { NgbdModalBasic }  from './modal-basic';
*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { Vista2Component } from './vista2/vista2.component';
import { TablaComponent } from './tabla/tabla.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    Vista2Component,    
    TablaComponent, PageNotFoundComponent, 
    /**NgbdModalBasic*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
