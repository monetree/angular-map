import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
imports: [
BrowserModule,
CommonModule,
FormsModule,
AgmCoreModule.forRoot({
apiKey: 'AIzaSyBUb50-rNcST68aopXr5iH4jU2fBvGdQAc'
})
],
providers: [],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule {}