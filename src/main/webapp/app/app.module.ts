import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Huashan2020SharedModule } from 'app/shared/shared.module';
import { Huashan2020CoreModule } from 'app/core/core.module';
import { Huashan2020AppRoutingModule } from './app-routing.module';
import { Huashan2020HomeModule } from './home/home.module';
import { Huashan2020EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Huashan2020SharedModule,
    Huashan2020CoreModule,
    Huashan2020HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Huashan2020EntityModule,
    Huashan2020AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Huashan2020AppModule {}
