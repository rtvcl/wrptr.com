import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";


export const docsDirectory = path.join(process.cwd(), "src/mdx-content", "blog");

export const postFilePaths = fs
  .readdirSync(docsDirectory)
  .filter((path) => /\.mdx?$/.test(path));


export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
}
