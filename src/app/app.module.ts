import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SharedModule} from "./shared/shared.module";

// Config del locale de la app
import localeEsVe from '@angular/common/locales/es-VE';
import localeFrCa from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsVe);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-VE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
