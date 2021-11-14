import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellModule } from './shell/shell.module';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '../app/modules/alert/alert.module';
import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AppLanding2Module } from '@app/pages/app-landing-2/app-landing-2.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { FaqsModule } from '@app/blocks/faqs/faqs.module';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { AppCreateComponent } from './modules/app-create/app-create.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    ShellModule,
    SharedModule,
    NgbDropdownModule,
    HomeModule,
    AppRoutingModule,
    AppLanding2Module,
    SlidersModule,
    CountersModule,
    FaqsModule,
    BrowserAnimationsModule,
    CtaModule,
    FootersModule,
    AlertModule,
    MatDialogModule,
    // must be imported as the last module as it contains the fallback route
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['http://www.kietteik.xyz']
        // disallowedRoutes: ['http://example.com/examplebadroute/'],
      }
    }),
    MatButtonToggleModule,
    FormsModule
  ],
  declarations: [AppComponent, AppCreateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
