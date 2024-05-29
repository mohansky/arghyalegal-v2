import { options } from "@/.velite";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${options.basepath}/sitemap.xml`,
  };
}
