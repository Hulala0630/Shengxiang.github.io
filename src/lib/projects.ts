import rawProjects from "../data/projects.generated.json";
import type { Locale } from "../data/site";

export type Localized = { en?: string; zh?: string };
export type Project = Record<string, any> & {
  title: Localized;
  projectType?: Localized;
  technologies?: string[];
  cover?: string;
  video?: { type?: string; url?: string };
};

export const projects: Project[] = (rawProjects as any[]).flatMap((project) =>
  project.type === "collection"
    ? project.items.map((item: Project) => ({
        ...item,
        collectionTitle: project.title
      }))
    : project
);

const selectedTitles = [
  "Industrial Fault Simulation & Training System",
  "Industrial Simulation Data Agent",
  "Vision-based Motion Evaluation & Feedback System"
];

export const selectedProjects = selectedTitles
  .map((title) => projects.find((project) => project.title?.en === title))
  .filter(Boolean) as Project[];

export const otherProjects = projects.filter(
  (project) => !selectedTitles.includes(project.title?.en ?? "")
);

export function text(value: unknown, locale: Locale): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const localized = value as Localized;
    return localized[locale] || localized.en || localized.zh || "";
  }
  return String(value);
}

export function list(value: unknown, locale: Locale): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  const localizedValue =
    typeof value === "object"
      ? (value as Record<string, unknown>)[locale] ??
        (value as Record<string, unknown>).en ??
        (value as Record<string, unknown>).zh
      : value;
  if (Array.isArray(localizedValue)) return localizedValue.map(String);
  if (typeof localizedValue === "string" && localizedValue.trim()) {
    return [localizedValue];
  }
  return [];
}

export function projectKind(project: Project): "enterprise" | "personal" {
  const value = `${project.projectType?.en ?? ""}${project.projectType?.zh ?? ""}`;
  return /Industry Project|Enterprise|企业项目/i.test(value)
    ? "enterprise"
    : "personal";
}

export function assetPath(path?: string): string {
  if (!path) return "";
  return `/${path.replace(/^\/+/, "")}`;
}
