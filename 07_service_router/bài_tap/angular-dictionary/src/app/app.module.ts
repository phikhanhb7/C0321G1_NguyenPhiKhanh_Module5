import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistionavyComponent } from './distionavy/distionavy.component';
import { DictionaryDetailComponent } from './distionavy-detail/dictionary-detail.component';
import { DistionavyPageComponent } from './distionavy-page/distionavy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DistionavyComponent,
    DictionaryDetailComponent,
    DistionavyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
