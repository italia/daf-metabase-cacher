import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FileComponent} from './file/file.component';
import {RouterModule} from "@angular/router";
import {FileService} from "./providers/file.service";
import {HttpModule} from "@angular/http";

import {FormsModule} from "@angular/forms";
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
      FileComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule,
      ModalModule.forRoot(),
      BootstrapModalModule,
      RouterModule.forRoot([
              {
                  path: '',
                  redirectTo: 'file',
                  pathMatch: 'full'
              },
              {
                  path: 'file',
                  component: FileComponent,
              }
          ],
          {useHash: false})
  ],
  providers: [
      FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
