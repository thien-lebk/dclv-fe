import { AuthModule } from '@auth0/auth0-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import {CoreModule} from './core/core.module';
import { JwtModule } from '@auth0/angular-jwt';
import {SharedModule} from './shared/shared.module';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslocoRootModule,
    AuthModule.forRoot({
      domain: 'dev-o4vaktng.us.auth0.com',
      clientId: 'rmRyiUJdRI0xof4S7bJNFthMnCTC9Dlc'
    }),
    CoreModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['http://www.kietteik.xyz'],
        // disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
