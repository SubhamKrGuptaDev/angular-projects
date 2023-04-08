import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServeComponent } from './serve/serve.component';
import { FormsModule } from '@angular/forms';
import { SingleServerComponent } from './single-server/single-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServeComponent,
    SingleServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
