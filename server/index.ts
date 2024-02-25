import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import next from "next";

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: { distDir: "dist/client" },
});
const handle = app.getRequestHandler();

export const nextjsServer = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});
