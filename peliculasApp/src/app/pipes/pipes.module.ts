import { ParesPipe } from './pares.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe
  ],
  exports:[
    ImagenPipe,
    ParesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
