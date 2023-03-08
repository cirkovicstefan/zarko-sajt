import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntersovanjeComponent } from './componet/intersovanje/intersovanje.component';
import { KurseviComponent } from './componet/kursevi/kursevi.component';
import { ObrazovanjeComponent } from './componet/obrazovanje/obrazovanje.component';
import { OmeniComponent } from './componet/omeni/omeni.component';
import { ProjektiComponent } from './componet/projekti/projekti.component';
import { RadnoIskustvoComponent } from './componet/radno-iskustvo/radno-iskustvo.component';
import { VestineComponent } from './componet/vestine/vestine.component';

const routes: Routes = [
  { path: '', redirectTo: 'omeni',  pathMatch: 'full'},
  { path: 'omeni', component: OmeniComponent },
  { path: 'radno-iskustvo', component: RadnoIskustvoComponent },
  { path: 'vestine', component: VestineComponent },
  { path: 'projekti', component: ProjektiComponent },
  { path: 'obrazovanje', component:ObrazovanjeComponent },
  { path: 'kursevi', component:KurseviComponent },
  {path: 'interesovanja', component: IntersovanjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
