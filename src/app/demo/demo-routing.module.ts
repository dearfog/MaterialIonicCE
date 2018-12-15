import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TreeComponent } from './tree/tree.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
        path: '', 
        component: NavComponent,
        children: [            
            { path: 'address-form', component: AddressFormComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'drag-drop', component: DragDropComponent },
            { path: 'table', component: TableComponent },
            { path: 'tree', component: TreeComponent },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
