import Parse from "parse/dist/parse.min.js";

const appId = import.meta.env.VITE_PARSE_APP_ID as string;
const jsKey = import.meta.env.VITE_PARSE_JS_KEY as string;
const serverURL = import.meta.env.VITE_PARSE_SERVER_URL as string;

Parse.initialize(appId, jsKey);
Parse.serverURL = serverURL;

export default Parse;