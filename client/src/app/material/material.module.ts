import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


const materialComponents = [
  MatTabsModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
