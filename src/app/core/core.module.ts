import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
 

@NgModule({
  imports: [ CommonModule ],
  
  declarations: [  ],
  providers: [  DataService ] 
})
export class CoreModule {     
}



