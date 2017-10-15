import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipetPage } from './recipet';

@NgModule({
  declarations: [
    RecipetPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipetPage),
  ],
})
export class RecipetPageModule {}
