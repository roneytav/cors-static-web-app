import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrltestComponent } from './urltest/urltest.component';

const routes: Routes = [
  {path:'teste',component:UrltestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
