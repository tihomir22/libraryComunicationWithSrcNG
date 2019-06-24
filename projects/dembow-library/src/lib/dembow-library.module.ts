import { NgModule } from '@angular/core';
import { DembowLibraryComponent } from './dembow-library.component';
import { AbridorDialogoComponent } from './abridor-dialogo/abridor-dialogo.component';

@NgModule({
  declarations: [DembowLibraryComponent, AbridorDialogoComponent],
  imports: [
  ],
  exports: [DembowLibraryComponent,AbridorDialogoComponent]
})
export class DembowLibraryModule { }
