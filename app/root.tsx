import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import styles from "./styles/app.css"
import { NavContextProvier } from "./contexts/navcontext";
import { useState } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [nav, setNav] = useState(false);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavContextProvier value={{ isNavOpen: nav, setNavOpen: setNav }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NavContextProvier>
      </body>
    </html >
  );
}
