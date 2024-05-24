import { options } from "@/.velite";

export default function sitemap() {
  return [
    {
      url: `${options.basepath}`,
      lastModified: new Date(),
    },
    {
      url: `${options.basepath}/whyus`,
      lastModified: new Date(),
    },
    {
      url: `${options.basepath}/team`,
      lastModified: new Date(),
    },
    {
      url: `${options.basepath}/practice-areas`,
      lastModified: new Date(),
    },
    {
      url: `${options.basepath}/contact`,
      lastModified: new Date(),
    },
  ];
}
