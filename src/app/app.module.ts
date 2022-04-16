import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { TestimonialsComponent } from './components/shared/testimonials/testimonials.component';
import { ResumeComponent } from './components/shared/resume/resume.component';
import { AboutComponent } from './components/shared/about/about.component';
import { SkillsComponent } from './components/shared/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    TestimonialsComponent,
    ResumeComponent,
    AboutComponent,
    SkillsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
