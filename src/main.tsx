import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { courses } from "./data/courses";
import gitCourse from "./data/gitCourse";
import expressCourse from "./data/expressCourse";
import "./styles/index.css";

// Use Vite's BASE_URL so the router works both locally ("/") and when
// deployed to a subpath (e.g. "/express-course/").
const base = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Migration: normalize saved progress formats so both course and sidebar read the same data
// This runs once on initial load. It is defensive and non-destructive.
(function normalizeSavedProgress() {
  try {
    // helper to get course content by slug
    const getContent = (slug: string) => {
      if (!slug) return null;
      if (slug === gitCourse.slug) return gitCourse as any;
      if (slug === expressCourse.slug) return expressCourse as any;
      return null;
    };

    courses.forEach((c) => {
      const slug = c.slug;
      if (!slug) return;

      // if explicit items key exists, derive module map
      const itemsRaw = localStorage.getItem(`progressItems-${slug}`);
      if (itemsRaw) {
        try {
          const items = JSON.parse(itemsRaw);
          if (Array.isArray(items)) {
            const content = getContent(slug);
            if (content && content.sections) {
              const map: Record<string, number> = {};
              content.sections.forEach((mod: any) => {
                const total =
                  (mod.lessons?.length || 0) + (mod.exercises?.length || 0);
                if (total === 0) map[mod.id] = 0;
                else {
                  let completed = 0;
                  (mod.lessons || []).forEach((l: any) => {
                    if (items.includes(l.id)) completed++;
                  });
                  (mod.exercises || []).forEach((e: any) => {
                    if (items.includes(e.id)) completed++;
                  });
                  map[mod.id] = Math.round((completed / total) * 100);
                }
              });
              localStorage.setItem(`progress-${slug}`, JSON.stringify(map));
            }
          }
        } catch (e) {
          // ignore parse errors
        }
      } else {
        // fallback: if progress-<slug> exists and is an array, also write progressItems-<slug>
        const raw = localStorage.getItem(`progress-${slug}`);
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              // treat as completed item ids
              localStorage.setItem(
                `progressItems-${slug}`,
                JSON.stringify(parsed)
              );
              // also attempt to write module map if content exists
              const content = getContent(slug);
              if (content && content.sections) {
                const map: Record<string, number> = {};
                content.sections.forEach((mod: any) => {
                  const total =
                    (mod.lessons?.length || 0) + (mod.exercises?.length || 0);
                  if (total === 0) map[mod.id] = 0;
                  else {
                    let completed = 0;
                    (mod.lessons || []).forEach((l: any) => {
                      if (parsed.includes(l.id)) completed++;
                    });
                    (mod.exercises || []).forEach((e: any) => {
                      if (parsed.includes(e.id)) completed++;
                    });
                    map[mod.id] = Math.round((completed / total) * 100);
                  }
                });
                localStorage.setItem(`progress-${slug}`, JSON.stringify(map));
              }
            }
          } catch (e) {
            // ignore
          }
        }
      }
    });
  } catch (err) {
    // defensive: do not block app startup
    // eslint-disable-next-line no-console
    console.warn("Progress normalization failed:", err);
  }
})();
