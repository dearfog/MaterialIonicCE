import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'extraction', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './chrome-extension/chrome-extension.module#ChromeExtensionModule' },
  { path: '', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'drag-drop' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
