import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstallPage } from './install';

@NgModule({
  declarations: [
    InstallPage,
  ],
  imports: [
    IonicPageModule.forChild(InstallPage),
  ],
})
export class InstallPageModule {}
