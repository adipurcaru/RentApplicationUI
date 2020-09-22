import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';
import { environment } from '../environments/environment';

// this checks if the app is running on IE
export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
