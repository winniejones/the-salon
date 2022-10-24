import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const salonDir = join(process.cwd(), "_salons");

export function getSalonSlugs() {
  return fs.readdirSync(salonDir);
}

export function getSalonBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(salonDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllSalons(fields = []) {
  const slugs = getSalonSlugs();
  const salons = slugs
    .map((slug) => getSalonBySlug(slug, fields))
    .sort((salon1, salon2) =>
      salon1.title > salon2.title ? -1 : 1
    );
  return salons;
}
