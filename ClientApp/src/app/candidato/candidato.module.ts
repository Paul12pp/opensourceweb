import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoComponent } from './candidato.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CandidatoComponent, PersonalComponent, SkillComponent, ExperienceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CandidatoRoutingModule
  ]
})
export class CandidatoModule { }
