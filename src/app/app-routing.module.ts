import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipamentsComponent } from './content/equipaments/equipaments.component';
import { SyndrumComponent } from './content/syndrum/syndrum.component';
import { LickshotComponent } from './content/lickshot/lickshot.component';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  {path:'equipo', component: EquipamentsComponent, pathMatch:'prefix'},
  {path:'syndrum', component: SyndrumComponent, pathMatch:'prefix'},
  {path:'lick',component:LickshotComponent,pathMatch:'prefix'},
  {path:'', component:HomeComponent, pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
