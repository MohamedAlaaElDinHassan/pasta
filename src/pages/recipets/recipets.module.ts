import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipetsPage } from './recipets';

@NgModule({
  declarations: [
    RecipetsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipetsPage),
  ],
})
export class RecipetsPageModule {}
