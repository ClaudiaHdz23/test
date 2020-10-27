import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HtmlCodePipe } from './htmlCode.pipe';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { SanityPipe } from './pipes/sanity.pipe';
import { DisplayTestComponent } from './components/display-test/display-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCodePipe,
    CustomSelectComponent,
    SanityPipe,
    DisplayTestComponent
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
