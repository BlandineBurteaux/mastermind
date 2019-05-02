import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CelComponent } from './cel/cel.component';
import { RowComponent } from './row/row.component';


@NgModule({
  declarations: [
    AppComponent,
    CelComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
