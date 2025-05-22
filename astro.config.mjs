// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Immich Kiosk",
      favicon: "/favicon.ico",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/damongolding/immich-kiosk",
        },
      ],
      sidebar: [
        {
          slug: "installation",
        },

        {
          label: "Configuration",
          items: [
            { slug: "configuration" },
            { slug: "configuration/url-params" },
            { slug: "configuration/core" },
            { slug: "configuration/albums" },
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
            { slug: "configuration/offline-mode" },
            { slug: "configuration/custom-css" },
            { slug: "configuration/iframe" },
            { slug: "configuration/multiple-users" },
            { slug: "configuration/webhooks" },
            { slug: "configuration/additional-options" },
          ],
        },
        {
          label: "Misc",
          autogenerate: { directory: "misc" },
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
    }),
  ],
});
