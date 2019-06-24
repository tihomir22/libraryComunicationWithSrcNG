import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbridorDialogoComponent } from 'projects/dembow-library/src/lib/abridor-dialogo/abridor-dialogo.component';

const routes: Routes = [
  {
    path: '', component: AbridorDialogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
