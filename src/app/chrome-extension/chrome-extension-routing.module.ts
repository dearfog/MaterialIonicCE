import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { ExtractionComponent } from './components/extraction/extraction.component';
import { DownloadingComponent } from './components/download/downloading/downloading.component';
import { DownloadedComponent } from './components/download/downloaded/downloaded.component';

const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
            { path: 'extraction', component: ExtractionComponent },
            { path: 'downloading', component: DownloadingComponent },
            { path: 'downloaded', component: DownloadedComponent },
            { path: '**', redirectTo: "extraction" },
            { path: '', pathMatch: 'full', redirectTo: 'extraction' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChromeExtensionRoutingModule { }
