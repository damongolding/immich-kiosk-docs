// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Immich Kiosk",
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
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          slug: "installation",
        },

        {
          label: "Configuration",
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Examples",
          items: [
            { label: "Compose example", link: "compose-example" },
            { label: "Config example", link: "config-example" },
          ],
        },
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // }
      ],
    }),
  ],
});
