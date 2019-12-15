import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { FertilizerSystemComponent } from './fertilizer-system/fertilizer-system.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'f', component: FertilizerSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
