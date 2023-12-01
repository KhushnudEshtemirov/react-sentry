import { createRoot } from "react-dom/client";
import React from "react";
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: "https://84531d25957155ee5697fb956fc98ef6@o4506262038052864.ingest.sentry.io/4506262061383680",
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],

  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
