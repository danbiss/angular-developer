import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIFunHouseComponent } from './api-fun-house.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';
import { CoreModule } from '../../@core/core.module';
import { StripHtmlPipe } from '../../pipes/strip-html.pipe';
import { NbListModule, NbSelectModule, NbSpinnerModule, NbButtonModule, NbCardModule } from '@nebular/theme';

describe('MyMenuComponent', () => {
  let component: APIFunHouseComponent;
  let fixture: ComponentFixture<APIFunHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIFunHouseComponent, StripHtmlPipe ],
      imports: [
        HttpModule,
        NgbModule.forRoot(),
        ThemeModule.forRoot(),
        CoreModule.forRoot(),
        ThemeModule,
        NbListModule,
        NbSelectModule,
        NbSpinnerModule,
        NbButtonModule,
        NbCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIFunHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
