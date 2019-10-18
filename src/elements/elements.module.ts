import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { AwesomeElementComponent } from '../app/awesome-element/awesome-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AwesomeElementComponent],
  imports: [BrowserModule],
  entryComponents: [AwesomeElementComponent],
  exports: [AwesomeElementComponent]
})
export class ElementsModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(AwesomeElementComponent, { injector });
    customElements.define('my-component', element);
  }

  ngDoBootstrap() {}
}
