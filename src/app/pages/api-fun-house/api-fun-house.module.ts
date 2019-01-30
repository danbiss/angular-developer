import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIFunHouseComponent } from './api-fun-house.component';
import { StripHtmlPipe} from '../../pipes/strip-html.pipe';
import { ThemeModule } from '../../@theme/theme.module';
import { NbSelectModule, NbListModule, NbSpinnerModule, NbButtonModule, NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    APIFunHouseComponent,
    StripHtmlPipe
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbListModule,
    NbSelectModule,
    NbSpinnerModule,
    NbButtonModule,
    NbCardModule
  ]
})
export class APIFunHouseModule { }
