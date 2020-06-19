import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgxPaginationModule } from 'ngx-pagination'
import { NgbdModalComponent } from './modal-basic';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { Vista2Component } from './vista2/vista2.component';
import { TablaComponent } from './tabla/tabla.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    Vista2Component,    
    TablaComponent, PageNotFoundComponent, ModalComponentComponent, ModalAddUpdateComponent,
     
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
