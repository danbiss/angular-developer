import { NgModule } from '@angular/core';

import {
  NbAlertModule,
  NbSpinnerModule,
  NbInputModule,
  NbSelectModule,
  NbActionsModule,
  NbCardModule,
  NbButtonModule,
  NbTooltipModule,
  NbPopoverModule,
  NbListModule,
  NbTabsetModule,
  NbStepperModule,
  NbDatepickerModule,
  NbAccordionModule,
  NbBadgeModule,
} from '@nebular/theme';

const PAGES_COMPONENTS = [
];

@NgModule({
  imports: [
    NbAlertModule,
    NbSelectModule,
    NbInputModule,
    NbSpinnerModule,
    NbActionsModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
    NbPopoverModule,
    NbListModule,
    NbTabsetModule,
    NbStepperModule,
    NbDatepickerModule,
    NbAccordionModule,
    NbBadgeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [

  ],
  exports: [
    NbAlertModule,
    NbSelectModule,
    NbInputModule,
    NbSpinnerModule,
    NbActionsModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
    NbPopoverModule,
    NbListModule,
    NbTabsetModule,
    NbStepperModule,
    NbDatepickerModule,
    NbAccordionModule,
    NbBadgeModule,
  ]
})
export class NbComponentsModule {
}
