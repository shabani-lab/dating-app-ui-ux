# UI/UX Improvement TODO

## Priority 1
- [x] Add a shared `ScreenHeader` component for all tabs to remove repeated custom header code.
- [x] Add empty states for Explore search/filter combinations that return no results.
- [x] Add loading/skeleton placeholders for profile cards, event cards, and location cards.
- [x] Normalize icon sizes and touch target sizes to at least 44x44 on all interactive elements.
- [x] Add consistent safe-area handling on top and bottom across all screens.

## Priority 2
- [ ] Add typography tokens (display/title/body/caption) and replace hardcoded font sizes.
- [ ] Add elevation/shadow tokens for cards and floating controls.
- [ ] Add state colors for pressed/disabled buttons and chips.
- [ ] Add reusable `StatCard` and `PillChip` components to reduce style duplication.
- [ ] Add a single spacing rhythm for vertical sections (header, controls, content).

## Priority 3
- [ ] Improve Explore filter UX with horizontal scroll and sticky behavior.
- [ ] Add “liked/favorited” visual state for profile cards.
- [ ] Improve contrast validation for image overlays using WCAG checks.
- [ ] Add motion guidelines (card entrance, tab transition, feedback micro-animations).
- [ ] Add responsive breakpoints for tablet layouts (2->3 column cards where appropriate).

## Accessibility
- [ ] Add `accessibilityLabel` and `accessibilityRole` for icons/buttons/cards.
- [ ] Ensure all text meets contrast ratio in both light and dark mode.
- [ ] Support dynamic type scaling and avoid fixed-height text containers.
- [ ] Add screen reader announcements for filter changes and navigation actions.

## Content/Mock Data
- [ ] Expand mock profile categories and add realistic geo/time metadata.
- [ ] Add varied name lengths and long text test cases for truncation checks.
- [ ] Add fallback local image assets for offline UI demos.
