import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmeniComponent } from './componet/omeni/omeni.component';
import { ObrazovanjeComponent } from './componet/obrazovanje/obrazovanje.component';
import { KurseviComponent } from './componet/kursevi/kursevi.component';
import { RadnoIskustvoComponent } from './componet/radno-iskustvo/radno-iskustvo.component';
import { VestineComponent } from './componet/vestine/vestine.component';
import { ProjektiComponent } from './componet/projekti/projekti.component';
import { IntersovanjeComponent } from './componet/intersovanje/intersovanje.component';


@NgModule({
  declarations: [
    AppComponent,
    OmeniComponent,
    ObrazovanjeComponent,
    KurseviComponent,
    RadnoIskustvoComponent,
    VestineComponent,
    ProjektiComponent,
    IntersovanjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
