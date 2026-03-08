# Neon Refresh Execution

- [x] Phase 0: Add task tracking and local UI primitives.
- [x] Phase 1: Replace Lucide with local custom SVG icons.
- [x] Phase 2: Add `Shimmer Button` to the primary hero CTA.
- [x] Phase 3: Replace the hero grid with a wireframe horizon background.
- [x] Phase 4: Run cleanup, remove `lucide-react`, and verify the full refresh.
- [x] Phase 5: Evaluate `Orbiting Circles` only after phases 1-4 are approved.

## Review Notes

- [x] Phase 0: Added `tasks/todo.md`, local `SiteIcon`, and local `ShimmerButton` components.
- [x] Verification: `bun run build`
- [x] Verification: `bun run lint`
- [x] Browser check: desktop hero, CTA hierarchy, footer controls
- [x] Browser check: mobile hero layout and mobile menu
- [x] Cleanup: removed `lucide-react` and stale Vite manual chunk configuration
- [x] Follow-up: removed hero pointer bloom to eliminate cursor-induced lag
- [x] Follow-up: enlarged social controls and added desktop hover labels
- [x] Follow-up: added a border beam to the hero stats card and increased shimmer contrast on the primary CTA
- [x] Follow-up: removed orbiting circles in favor of a static skills hub layout and revalidated desktop/mobile layouts
- [x] Follow-up: removed the hero stats-card beam, applied shimmer treatment to both hero CTAs, and restored the skills section to a simpler icon-card grid
- [x] Final polish: normalized skill card heading size with the rest of the site, updated the README to match the current implementation, and completed a final speed review
