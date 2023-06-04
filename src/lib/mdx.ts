import fs from "fs";
import matter from "gray-matter";
import path, { join } from "path";

const mdxContentDir = "src/mdx-content";

const formatToSlug = (filename: string) => filename.replace(/\.mdx$/, "");

export const getAllDocsByType = (type: string) => {
  const dirPath = path.join(process.cwd(), mdxContentDir, type);
  const dir = fs.readdirSync(dirPath);
  const docs = dir.map((fileName) => {
    const slug = formatToSlug(fileName);
    const fileContent = fs.readFileSync(path.join(dirPath, fileName), "utf-8");
    const { data, content } = matter(fileContent);
    return {
      meta: data,
      slug,
      content,
    };
  });

  return docs;
};


