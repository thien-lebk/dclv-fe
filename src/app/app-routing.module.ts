import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/services/shell.service';
import { AuthenticationGuard } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () =>
        import('./pages/about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'app-landing',
      loadChildren: () =>
        import('./pages/app-landing/app-landing.module').then(
          m => m.AppLandingModule
        )
    },
    {
      path: 'automate-social',
      loadChildren: () =>
        import('./pages/automate-social/automate-social.module').then(
          m => m.AutomateSocialModule
        )
    },
    {
      path: 'business-solutions',
      loadChildren: () =>
        import('./pages/business-solutions/business-solutions.module').then(
          m => m.BusinessSolutionsModule
        )
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'corporate',
      loadChildren: () =>
        import('./pages/corporate/corporate.module').then(
          m => m.CorporateModule
        )
    },
    {
      path: 'developers',
      loadChildren: () =>
        import('./pages/developers/developers.module').then(
          m => m.DevelopersModule
        )
    },
    {
      path: 'faqs',
      loadChildren: () =>
        import('./pages/faqs/faqs.module').then(m => m.FaqsModule)
    },
    {
      path: 'online-payment',
      loadChildren: () =>
        import('./pages/online-payment/online-payment.module').then(
          m => m.OnlinePaymentModule
        )
    },
    {
      path: 'pricing',
      loadChildren: () =>
        import('./pages/pricing/pricing.module').then(m => m.PricingModule)
    },
    {
      path: 'saas',
      loadChildren: () =>
        import('./pages/saas/saas.module').then(m => m.SaasModule)
    },
    {
      path: 'startup',
      loadChildren: () =>
        import('./pages/startup/startup.module').then(m => m.StartupModule)
    }
  ]),

  {
    path: 'app-landing-2',
    loadChildren: () =>
      import('./pages/app-landing-2/app-landing-2.module').then(
        m => m.AppLanding2Module
      )
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'integration',
    loadChildren: () =>
      import('./pages/integration/integration.module').then(
        m => m.IntegrationModule
      )
  },
  {
    path: 'smart-business',
    loadChildren: () =>
      import('./pages/smart-business/smart-business.module').then(
        m => m.SmartBusinessModule
      )
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./pages/social/social.module').then(m => m.SocialModule)
  },
  {
    path: 'applications',
    canActivate: [AuthenticationGuard],

    loadChildren: () =>
      import('./modules/apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'client',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'role',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/role/role.module').then(m => m.RoleModule)
  },
  {
    path: 'user',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'profile',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'intro',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/intro/intro-routing.module').then(
        m => m.IntroRoutingModule
      )
  },
  {
    path: 'tenant-api',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/tenant-api/tenant-api.module').then(
        m => m.TenantApiModule
      )
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
