// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: '3b1ef167-6717-4e38-8053-9ec9a5b4a08c',
  redirectUri: 'http://localhost:4200/',
  postLogoutRedirectUri: 'http://localhost:4200/',
  b2cScopes: ['https://agcsbxb2c.onmicrosoft.com/dev-webportal-gateway/access_customer_service_as_user', 'https://agcsbxb2c.onmicrosoft.com/dev-webportal-gateway/access_user_service_as_user'],
  webApi: 'http://localhost:8080/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
