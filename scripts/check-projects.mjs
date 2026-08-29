import projects from "../src/data/projects.generated.json" with { type: "json" };

const failures = [];
const isPair = (value) =>
  value &&
  typeof value === "object" &&
  typeof value.en === "string" &&
  value.en.trim() &&
  typeof value.zh === "string" &&
  value.zh.trim();

function checkProject(project, path) {
  if (!isPair(project.title)) failures.push(`${path}.title is not bilingual`);
  if (!project.type && !isPair(project.projectType)) {
    failures.push(`${path}.projectType is missing`);
  }
  if (project.type === "collection") {
    if (!Array.isArray(project.items) || project.items.length === 0) {
      failures.push(`${path}.items is empty`);
    } else {
      project.items.forEach((item, index) =>
        checkProject(item, `${path}.items[${index}]`)
      );
    }
  }
}

projects.forEach((project, index) => checkProject(project, `projects[${index}]`));

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${projects.length} root project entries.`);
