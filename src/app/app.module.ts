import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuTitleComponent } from './menu/menu-title/menu-title.component';
import { EquipamentsComponent } from './content/equipaments/equipaments.component';
import { SyndrumComponent } from './content/syndrum/syndrum.component';
import { LickshotComponent } from './content/lickshot/lickshot.component';
import { HomeComponent } from './app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    EquipamentsComponent,
    SyndrumComponent,
    LickshotComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
