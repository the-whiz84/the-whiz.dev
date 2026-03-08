# Lessons Learned

- When removing a dependency that was previously chunked manually in `vite.config.ts`, update `build.rollupOptions.output.manualChunks` in the same change. Otherwise the build can still try to resolve a deleted package after imports are gone.
- Decorative pointer effects should not depend on continuous global pointer state when the effect is non-essential. Ambient hero backgrounds stay smoother when interaction is removed or handled without per-frame React state updates.
- Custom icon systems need a legibility pass after the first implementation. Small bespoke glyphs can read worse than a stock set unless the hit area, rendered size, and label affordance are checked in-browser.
- Orbit-style motion in portfolio skills sections should be treated as an experiment, not a default. If the motion becomes the point of attention instead of the content, replace it with a static focal composition.
- Shimmer treatments need contrast between the animated band and the button face. If the base fill already glows heavily, the shimmer effect can disappear unless the highlight is materially brighter.
- In a dense hero, only one decorative accent should compete for attention inside a component cluster. If the CTA already shimmers, animated borders on the adjacent stats card usually add noise instead of hierarchy.
- When reverting an experimental layout, prefer returning to the last clearly readable structure and preserving only the successful subparts. Here that meant keeping the custom skill icons while dropping the extra skills-stage composition.
- Typography consistency needs to be checked at the component level, not just the section level. Matching section titles is not enough if card headings in one section are still materially smaller than adjacent sections.
