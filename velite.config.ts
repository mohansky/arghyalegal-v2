import { defineConfig, defineCollection, s } from "velite";
// import rehypeSlug from "rehype-slug";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const practiceAreas = defineCollection({
  name: "PracticeAreas",
  pattern: "practice-areas/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      published: s.boolean().default(true),
      id: s.number(),
      title: s.string().max(99),
      subtitle: s.string().max(999),
      img: s.string(),
      imageBlurUrl: s.string().optional(),
      heroClassName: s.string().optional(),
      url: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const team = defineCollection({
  name: "Team",
  pattern: "team/**/*.mdx",
  schema: s
    .object({ 
      published: s.boolean().default(true),
      id: s.number(),
      name: s.string().max(99),
      role: s.string().max(99),
      image: s.string(),
      imageBlurUrl: s.string(),
      body: s.mdx(),
    })
    // .transform(computedFields),
});

const pages = defineCollection({
  name: "Pages",
  pattern: "pages/**/*.mdx",
  schema: s
    .object({
      // slug: s.path(),
      published: s.boolean().default(true),
      id: s.number(),
      title: s.string().optional(),
      img: s.string().optional(),
      body: s.mdx(),
    })
    // .transform(computedFields),
});

const options = defineCollection({
  name: "Options",
  pattern: "options/index.yml",
  single: true,
  schema: s.object({
    name: s.string().max(99),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    basepath: s.string().url(),
    ogImageURL: s.string().max(99),
    keywords: s.array(s.string()),
    author: s.object({
      name: s.string(),
      email: s.string().email(),
      url: s.string().url(),
    }),
    heroslider: s.array(
      s.object({
        title: s.string().max(99),
        subtitle: s.string().max(999),
        image: s.string(),
        blurDataURL: s.string(),
        btnText: s.string(),
        link: s.string(),
      })
    ),
    links: s.array(s.object({ text: s.string(), link: s.string() })),
    socials: s.array(
      s.object({
        name: s.string(),
        icon: s.string().optional(),
        link: s.string().optional(),
        image: s.image().optional(),
      })
    ),
    whyustitle: s.string().optional(),
    whyusitems: s.array(
      s.object({
        id: s.number(),
        title: s.string().max(99),
        text: s.string().max(999), 
      })
    ),
    copyright: s.string(),
    contact: s.array(
      s.object({
        id: s.number(),
        contactName: s.string().optional(),
        className: s.string().optional(),
        icon: s.string().optional(),
        title: s.string(),
        arialabel: s.string().optional(),
        href: s.string(),
        text: s.array(s.string()),
      })
    ),
    valuesTitle: s.string(),
    valuesItems: s.array(
      s.object({
        id: s.number(),
        title: s.string(),
        text: s.string().max(99),
        image: s.string().max(999),
      })
    ),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { pages, team, practiceAreas, options },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
