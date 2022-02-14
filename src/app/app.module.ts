import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routerConfig: Routes = [
  {path: 'collegues', component: AccueilComponent},
  {path: 'form-template', component: NouveauCollegueTemplateFormComponent},
  {path: 'detail/:pseudo', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    MenuComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
