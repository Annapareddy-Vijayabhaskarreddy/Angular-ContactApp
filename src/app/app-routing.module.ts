import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddashboardComponent } from './components/adddashboard/adddashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrashdashboardComponent } from './components/trashdashboard/trashdashboard.component';

const routes: Routes = [{
  path:'',component:DashboardComponent
},
{path:'edit/:id',component:AdddashboardComponent},

{path:'trash',component:TrashdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
