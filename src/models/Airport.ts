export type Location = {
	lat: number,
	lon: number,
}

export class Airport {
	constructor(
		public code: string,
		public location: Location,
	) {	}
}