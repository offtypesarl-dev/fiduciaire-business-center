import type { Section } from "./types";

/**
 * Stable, accent-safe anchor id for a section heading.
 * Index is appended-safe: we prefix with the position so duplicate or
 * near-duplicate headings never collide within a page.
 */
export function headingId(heading: string, index: number): string {
  const base = heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${index + 1}-${base || "section"}`;
}

/** Build a table-of-contents model from an ordered list of sections. */
export function tocItems(sections: Section[]) {
  return sections.map((s, i) => ({ id: headingId(s.heading, i), label: s.heading }));
}
