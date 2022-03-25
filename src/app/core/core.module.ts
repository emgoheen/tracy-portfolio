import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';



// Since this module is setup to only be loaded into AppModule, the way that PortfolioService is
// declared here as a provider would be the same as decorating the service itself with a providedIn: 'root'
// @Injectable decorator
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [PortfolioService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
