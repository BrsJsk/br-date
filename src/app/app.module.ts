import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrDateComponent } from "./components/br-date/br-date.component";

import { createCustomElement } from "@angular/elements";
@NgModule({
  declarations: [AppComponent, BrDateComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [BrDateComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(BrDateComponent, {
      injector: this.injector
    });

    customElements.define('br-date', element);
  }
}
