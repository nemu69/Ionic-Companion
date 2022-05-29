// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	auth_config: {
		client_id: '9b99df062f0f5167104d1cacf4671672c530c38a4d732a51f15705743cf6b809',
		secret: '3736c8d3aa1d24b5e5952847efb0a56ef334178942f2711c7a439cae93fbd245',
		server_host: 'https://api.intra.42.fr/v2',
		redirect_url: 'http://localhost:8100/callback',
		end_session_redirect_url: 'http://localhost:8100/endsession',
		scopes: 'public',
		//scopes: 'openid offline_access',

		pkce: true,
	  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';	// Included with Angular CLI.
