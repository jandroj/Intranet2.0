import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ListarComponent } from './persona/listar/listar.component';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { LoginComponent } from './persona/login/login.component';
import{ServiceService}from '../app/service/service.service';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing.module';
import{HttpClientModule}from '@angular/common/http';
import{MatDialogModule}from '@angular/material/dialog';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule,MatDialogModule ],
  declarations: [ AppComponent,ListarComponent,
    AddComponent,
    EditComponent,
    LoginComponent ],
    providers: [ServiceService],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
