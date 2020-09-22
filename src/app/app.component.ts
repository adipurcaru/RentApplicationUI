import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { CryptoUtils, Logger } from 'msal';
import { Settings, AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  public settings: Settings;
  public isIframe = false;
  constructor(public appSettings: AppSettings, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }
}
