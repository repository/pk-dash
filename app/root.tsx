import AHL400 from "@fontsource/atkinson-hyperlegible/400.css";
import AHL700 from "@fontsource/atkinson-hyperlegible/700.css";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import dedent from "dedent-js";
import type { FC } from "react";
import { StrictMode } from "react";
import Layout from "./layout";
import tailwindStyles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: AHL400 },
  { rel: "stylesheet", href: AHL700 },
];

createEmotionCache({ key: "mantine" });

/**
 * (() => {
 *   const getUserDarkModePreference = () => {
 *     try {
 *       const userPreference = localStorage.getItem("dark-mode");
 *
 *       if (userPreference === "true") {
 *         return true;
 *       } else if (userPreference === "false") {
 *         return false;
 *       }
 *     } catch (err) {}
 *     return null;
 *   };
 *
 *   window.__onThemeChange = () => {};
 *
 *   const updateTheme = (osDarkMode) => {
 *     const userDarkMode = getUserDarkModePreference();
 *
 *     let newDarkMode = userDarkMode ?? osDarkMode ?? true;
 *
 *     if (newDarkMode) {
 *       document.body.classList.add("dark");
 *     } else {
 *       document.body.classList.remove("dark");
 *     }
 *
 *     window.__darkMode = newDarkMode;
 *     window.__onThemeChange(newDarkMode);
 *   };
 *
 *   window.__setUserDarkModePreference = (newDarkMode) => {
 *     try {
 *       if (typeof newDarkMode === "boolean") {
 *         localStorage.setItem("dark-mode", newDarkMode);
 *       } else {
 *         localStorage.removeItem("dark-mode");
 *       }
 *     } catch (err) {}
 *     updateTheme(null);
 *   };
 *
 *   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
 *   darkQuery.addListener((e) => {
 *     updateTheme(e.matches);
 *   });
 *   updateTheme(darkQuery.matches);
 * })();
 */

const App: FC = () => {
  return (
    <StrictMode>
      <MantineProvider
        theme={{
          fontFamily:
            "Atkinson Hyperlegible, apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
        }}
      >
        <html lang="en">
          <head>
            <StylesPlaceholder />
            <Meta />
            <Links />
          </head>
          <body dir="ltr">
            <script
              dangerouslySetInnerHTML={{
                __html: dedent`
                (function () {
                  var getUserDarkModePreference = function getUserDarkModePreference() {
                    try {
                      var userPreference = localStorage.getItem("dark-mode");
                      if (userPreference === "true") {
                        return true;
                      } else if (userPreference === "false") {
                        return false;
                      }
                    } catch (err) {}
                    return null;
                  };
                  window.__onThemeChange = function () {};
                  var updateTheme = function updateTheme(osDarkMode) {
                    var _ref;
                    var userDarkMode = getUserDarkModePreference();
                    var newDarkMode = (_ref = userDarkMode !== null && userDarkMode !== void 0 ? userDarkMode : osDarkMode) !== null && _ref !== void 0 ? _ref : true;
                    if (newDarkMode) {
                      document.body.classList.add("dark");
                    } else {
                      document.body.classList.remove("dark");
                    }
                    window.__darkMode = newDarkMode;
                    window.__onThemeChange(newDarkMode);
                  };
                  window.__setUserDarkModePreference = function (newDarkMode) {
                    try {
                      if (typeof newDarkMode === "boolean") {
                        localStorage.setItem("dark-mode", newDarkMode);
                      } else {
                        localStorage.removeItem("dark-mode");
                      }
                    } catch (err) {}
                    updateTheme(null);
                  };
                  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                  darkQuery.addListener(function (e) {
                    updateTheme(e.matches);
                  });
                  updateTheme(darkQuery.matches);
                })();`,
              }}
            />
            <Layout>
              <Outlet />
            </Layout>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      </MantineProvider>
    </StrictMode>
  );
};
export default App;
