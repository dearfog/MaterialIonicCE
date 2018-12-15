import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChromeExtensionRoutingModule } from './chrome-extension-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ExtractionComponent } from './components/extraction/extraction.component';
import { DownloadingComponent } from './components/download/downloading/downloading.component';
import { DownloadedComponent } from './components/download/downloaded/downloaded.component';

@NgModule({
  declarations: [LayoutComponent, ExtractionComponent, DownloadingComponent, DownloadedComponent],
  imports: [
    CommonModule,
    ChromeExtensionRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class ChromeExtensionModule { }
