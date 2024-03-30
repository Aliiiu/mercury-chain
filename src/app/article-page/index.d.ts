export interface TAuthorizationRequest {
	id: string;
	thid: string;
	from: string;
	typ: string;
	type: string;
	body: {
		reason: string;
		message: string;
		callbackUrl: string;
		scope: any[]; // Specify a more specific type if possible for the items in the scope array
	};
}

export interface TRequestObject {
	request: TAuthorizationRequest;
	sessionId: string;
}
