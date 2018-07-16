import "reflect-metadata";
require('zone.js');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'HelloWorldWebPartStrings';
export interface IHelloWorldWebPartProps {
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    // Save context to window variable
    window["MyAngularWebPartContext"] = this.context;
    window["MyAngularWebPartProperties"] = this.properties;

    // Angular app element
    // spfx-app is the selector for Angular component
    this.domElement.innerHTML = '<spfx-app>Loading...</spfx-app>';

    // bootstrapModule
    platformBrowserDynamic().bootstrapModule(AppModule);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
