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
          href: "https://discord.gg/pcDSC9X3",
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
              badge: { text: "Updated", variant: "tip" },
            },
            { slug: "configuration/people" },
            { slug: "configuration/memories" },
            { slug: "configuration/date-range" },
            { slug: "configuration/tags" },
            { slug: "configuration/metadata" },
            { slug: "configuration/clock" },
            { slug: "configuration/behavior" },
            { slug: "configuration/image-fit" },
            { slug: "configuration/image-effects" },
            { slug: "configuration/ui" },
            { slug: "configuration/themes" },
            { slug: "configuration/layouts" },
            { slug: "configuration/weather" },
            { slug: "configuration/filters" },
            { slug: "configuration/more-info" },
            { slug: "configuration/redirects" },
            { slug: "configuration/sleep-mode" },
            {
              slug: "configuration/offline-mode",
              badge: { text: "New", variant: "note" },
            },
            { slug: "configuration/custom-css" },
            {
              slug: "configuration/iframe",
              badge: { text: "New", variant: "note" },
            },
            { slug: "configuration/multiple-users" },
            {
              slug: "configuration/webhooks",
              badge: { text: "Updated", variant: "tip" },
            },
            {
              slug: "configuration/additional-options",
              badge: { text: "Updated", variant: "tip" },
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
