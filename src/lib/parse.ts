import Parse from "parse";

const appId = import.meta.env.VITE_PARSE_APP_ID as string;
const jsKey = import.meta.env.VITE_PARSE_JS_KEY as string;
const serverURL = import.meta.env.VITE_PARSE_SERVER_URL as string;

if (!appId || !jsKey || !serverURL) {
  throw new Error("Missing Parse environment variables");
}

Parse.serverURL = serverURL;
Parse.initialize(appId, jsKey);

console.log("Parse config:", {
  serverURL: Parse.serverURL,
  applicationId: (Parse as any).applicationId,
  javaScriptKey: (Parse as any).javaScriptKey,
});

export default Parse;