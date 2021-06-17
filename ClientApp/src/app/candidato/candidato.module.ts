import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoComponent } from './candidato.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [CandidatoComponent, PersonalComponent, SkillComponent, ExperienceComponent],
  imports: [
    CommonModule,
    CandidatoRoutingModule
  ]
})
export class CandidatoModule { }
