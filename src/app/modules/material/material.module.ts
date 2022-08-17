import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
