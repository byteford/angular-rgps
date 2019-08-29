import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
   { path:'', component: ClassListComponent },
   { path:'class/:classAbv', component: ClassDetailsComponent}
  ]) ],
  declarations: [ AppComponent, ClassListComponent, TopBarComponent, ClassDetailsComponent, TopMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
