import { Component, Input, OnInit } from '@angular/core';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IHelloWorldWebPartProps } from '../HelloWorldWebPart';

@Component({
  selector: "spfx-app", // Selector
  template: require("./template.component.html") as string
})
export class AppComponent implements OnInit {
  public ctx: WebPartContext;
  public properties: IHelloWorldWebPartProps;
  styles: any;

  constructor() {
  }

  public ngOnInit() {
    // Get context from window variable
    this.ctx = window["MyAngularWebPartContext"];
    // Get webpart properties
    this.properties = window["MyAngularWebPartProperties"];
    console.log("ctx", this.ctx);
    console.log("properties", this.properties);
  }

  @Input() context: WebPartContext;
}
