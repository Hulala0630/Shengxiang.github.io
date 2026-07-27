import { mkdir, readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const sourceUrl = new URL("../projects.js", import.meta.url);
const outputUrl = new URL("../src/data/projects.generated.json", import.meta.url);
const source = await readFile(sourceUrl, "utf8");
const script = new vm.Script(`${source}\n;projectsData;`, {
  filename: "projects.js"
});
const sourceProjects = script.runInNewContext(Object.create(null));

if (!Array.isArray(sourceProjects) || sourceProjects.length === 0) {
  throw new Error("projects.js did not produce a non-empty projectsData array.");
}

const personalProject = { en: "Personal Project", zh: "个人项目" };
const projects = sourceProjects.map((project) => {
  if (project.type !== "collection") return project;
  return {
    ...project,
    items: project.items.map((item) => ({
      ...item,
      projectType: item.projectType ?? personalProject
    }))
  };
});

await mkdir(new URL("../src/data/", import.meta.url), { recursive: true });
await writeFile(outputUrl, `${JSON.stringify(projects, null, 2)}\n`, "utf8");
console.log(`Synced ${projects.length} root project entries from projects.js.`);
