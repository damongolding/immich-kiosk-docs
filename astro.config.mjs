// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from "starlight-heading-badges";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Immich Kiosk",
      description:
        "Immich Kiosk is a lightweight slideshow for running on kiosk devices and browsers that uses Immich as a data source.",
      favicon: "/favicon.ico",
      editLink: {
        baseUrl: "https://github.com/damongolding/immich-kiosk-docs/edit/main/",
      },
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "2173d937-7da3-4ca7-91a6-647464af2385",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/kiosk-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:image:width", content: "1280," },
        },
        { tag: "meta", attrs: { property: "og:image:height", content: "640" } },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "/kiosk-banner.png",
          },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/damongolding/immich-kiosk",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/4uYz8pQmDH",
        },
      ],
      sidebar: [
        {
          label: "topNavLinks",
          items: [{ label: "Demo", link: "https://demo.immichkiosk.app" }],
        },
        {
          slug: "installation",
        },

        {
          label: "Configuration",
          items: [
            { slug: "configuration" },
            { slug: "configuration/url-params" },
            { slug: "configuration/core" },
            {
              slug: "configuration/albums",
            },
            { slug: "configuration/people" },
            { slug: "configuration/memories" },
            { slug: "configuration/date-range" },
            { slug: "configuration/tags" },
            { slug: "configuration/partners" },
            { slug: "configuration/metadata" },
            { slug: "configuration/clock" },
            { slug: "configuration/behavior" },
            { slug: "configuration/image-fit" },
            { slug: "configuration/image-effects" },
            { slug: "configuration/ui" },
            { slug: "configuration/themes" },
            { slug: "configuration/layouts" },
            {
              slug: "configuration/live-photos",
            },
            { slug: "configuration/weather" },
            { slug: "configuration/filters" },
            { slug: "configuration/more-info" },
            { slug: "configuration/redirects" },
            { slug: "configuration/sleep-mode" },
            {
              slug: "configuration/offline-mode",
            },
            { slug: "configuration/custom-css" },
            {
              slug: "configuration/iframe",
            },
            { slug: "configuration/multiple-users" },
            {
              slug: "configuration/webhooks",
            },
            {
              slug: "configuration/additional-options",
            },
          ],
        },
        {
          label: "Misc",
          autogenerate: { directory: "misc" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          slug: "error",
        },
        {
          slug: "faq",
        },
        {
          slug: "support-kiosk",
        },
        {
          slug: "help",
        },
        {
          slug: "contributing",
        },
        {
          label: "Resources",
          items: [
            { label: "Compose example", link: "compose-example" },
            { label: "Config example", link: "config-example" },
          ],
        },
      ],
      plugins: [
        starlightHeadingBadges(),
        starlightUtils({
          navLinks: {
            leading: { useSidebarLabelled: "topNavLinks" },
          },
        }),
      ],
    }),
  ],
});
