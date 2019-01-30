import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './instructions.component';
import { NbComponentsModule } from '../nb.components.module';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [InstructionsComponent],
  imports: [
    ThemeModule,
    CommonModule,
    NbComponentsModule,
    NbCardModule
  ]
})
export class InstructionsModule { }
