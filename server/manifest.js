const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.png","favicon.png","images/art1.jpg","images/art10.jpg","images/art11.JPG","images/art12.JPG","images/art13.jpg","images/art2.jpg","images/art3.jpg","images/art4.jpg","images/art5.jpg","images/art6.jpg","images/art7.jpg","images/art8.jpg","images/art9.jpg","images/logo1.png","images/logo2.png","images/logo3.png","images/logo4.png","images/program1.png","images/program2.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".JPG":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BZ5aRYhX.js",app:"_app/immutable/entry/app.CoHklbuP.js",imports:["_app/immutable/entry/start.BZ5aRYhX.js","_app/immutable/chunks/ZOvx3BG6.js","_app/immutable/chunks/98q9PgEG.js","_app/immutable/entry/app.CoHklbuP.js","_app/immutable/chunks/98q9PgEG.js","_app/immutable/chunks/D29oEIGf.js","_app/immutable/chunks/B0orjEsU.js","_app/immutable/chunks/C5B7ctPb.js","_app/immutable/chunks/CJyE1Di0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dmx1Qaza.js')),
			__memo(() => import('./chunks/1-DLAnl2_H.js')),
			__memo(() => import('./chunks/2-BTgW1aQP.js')),
			__memo(() => import('./chunks/3-BrvLPGdn.js')),
			__memo(() => import('./chunks/4-DG-o77Rq.js')),
			__memo(() => import('./chunks/5-BuctrxW_.js')),
			__memo(() => import('./chunks/6-BhUf5gE3.js')),
			__memo(() => import('./chunks/7-B6-xNvc0.js')),
			__memo(() => import('./chunks/8-C9Ng6gRC.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/works/logos",
				pattern: /^\/works\/logos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/works/pictures",
				pattern: /^\/works\/pictures\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/works/programs",
				pattern: /^\/works\/programs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
