# MOBILE UI/UX Audit and Plan (11-02-2026)

## Scope + Constraints
- Repository audited: `dating-app-ui-ux` (Expo Router mobile app).
- Requested target name was `pour-toi-mobile`, but current workspace is this repo. This plan is applied to the existing mobile codebase only.
- UI/UX-only changes: no route renames, no API/auth/session/data-model changes, no backend changes.
- No admin features added.
- No upload/verification flow changes present in this repo.
- Flat visual direction only: no shadow/elevation cards.

## Current UI Inventory
### Navigation
- Root stack: `app/_layout.tsx`
- Tab layout: `app/(tabs)/_layout.tsx`
- Tab screens:
  - `app/(tabs)/index.tsx` (Home)
  - `app/(tabs)/location.tsx` (Location)
  - `app/(tabs)/events.tsx` (Events)
  - `app/(tabs)/explore.tsx` (Explore)
  - `app/(tabs)/profile.tsx` (Profile)
- Additional screens:
  - `app/live.tsx` (Live/chat-like stream)
  - `app/user-profile.tsx` (User details)

### Shared UI Components
- Header: `components/ui/screen-header.tsx`
- Reusable states: `components/ui/card-skeleton.tsx`, `components/ui/empty-state.tsx`
- Explore primitives: `components/ui/search-bar.tsx`, `components/ui/filter-chip.tsx`, `components/ui/section-header.tsx`
- Profile/list cards: `components/ProfileCard.tsx`
- Theme/palette/tokens: `constants/theme.ts`, `hooks/use-app-palette.ts`

## UX Pain Points (Pre-Change)
1. No reduced-motion fallback for loading animation.
- File: `components/ui/card-skeleton.tsx`

2. Inconsistent press feedback patterns across tap targets.
- Files: `app/(tabs)/explore.tsx`, `components/ui/screen-header.tsx`, `components/ui/search-bar.tsx`, `components/ui/filter-chip.tsx`, `app/user-profile.tsx`

3. Feed-like screens using `ScrollView` for mapped lists (less scalable than `FlatList`).
- Files: `app/(tabs)/events.tsx`, `app/(tabs)/location.tsx`, `app/live.tsx`

4. Profile detail areas still styled as segmented cards instead of flat sections/separators.
- Files: `app/(tabs)/profile.tsx`, `app/user-profile.tsx`

5. Limited icon-first action consistency in profile quick actions.
- File: `app/(tabs)/profile.tsx`

6. Screen set mismatch vs requested flows (chat list/notifications/settings screens are not present in this repository).
- Inventory confirmed by `app/(tabs)/*`, `app/live.tsx`, `app/user-profile.tsx`.

## Proposed Design System (UI-Only)
### Tokens
- Spacing scale: `4/8/12/16/20/24/32`
- Typography scale: caption/body/subtitle/title/display
- Radius scale: small/medium/large/pill
- Border system: hairline separator token (`Borders.hairline`)
- Motion token: short motion durations (`Motion.fast`, `Motion.medium`)

### Component Rules
- Use flat sections with hairline borders/separators (`FlatSection` + `Separator`).
- Use icon-first actions via standardized icon button (`IconButton`).
- Use subtle press feedback on tappables (`AnimatedPressable`) with reduced-motion fallback.
- Use `FlatList` for long/streaming content and scroll-heavy screens.
- Keep empty/loading states consistent through shared components.

## Prioritized Checklist
### P0 (now)
- [x] Add reduced-motion awareness and press feedback primitives.
- [x] Improve list performance/scroll feel on Events, Location, Live screens with `FlatList`.
- [x] Unify header/action interaction styling through shared icon button.
- [x] Flatten Profile and User Profile sections with separators and icon-first actions.

### P1 (next)
- [ ] Add sticky section headers where profile/settings-like long forms exist.
- [ ] Consolidate row/action patterns for future settings and notifications screens (when added).
- [ ] Introduce unified inline error state component where list fetch failures exist.

### P2 (later)
- [ ] Add optional micro-transitions for section expand/collapse with reduced-motion guard.
- [ ] Add consistent toast/snackbar visual system for non-blocking feedback.

## Non-Breaking Risk Analysis
1. Theme token additions (`Borders`, `Motion`) are additive only.
- Risk: low. No existing token removal.

2. New UI primitives (`AnimatedPressable`, `FlatSection`, `Separator`, `IconButton`, `ListRow`, `useReducedMotion`) are additive.
- Risk: low. Existing navigation/business logic untouched.

3. `ScrollView` -> `FlatList` conversion on events/location/live.
- Risk: medium-low. Rendering strategy changes only; data, routes, and callbacks unchanged.

4. Profile/User Profile layout flattening.
- Risk: medium-low. Structural style updates only; no route or data mutation.

5. Header/chip/search interactions moved to shared press behavior.
- Risk: low. Same handlers, improved tactile feedback.

## Manual Testing Checklist
### Global
- [ ] Run app in light/dark theme and verify contrast/readability.
- [ ] Toggle device Reduce Motion and verify skeleton/press animations are reduced.
- [ ] Verify all tab routes still navigate as before.

### Explore (`app/(tabs)/explore.tsx`)
- [ ] Search filters users correctly.
- [ ] Filter chips still change category and result count.
- [ ] Pressing a profile card still opens `user-profile`.

### Events (`app/(tabs)/events.tsx`)
- [ ] Skeletons show briefly then list renders.
- [ ] Scroll remains smooth; event metadata is readable.

### Location (`app/(tabs)/location.tsx`)
- [ ] Skeletons show briefly then list renders.
- [ ] Scroll remains smooth; location metadata is readable.

### Live (`app/live.tsx`)
- [ ] Message list scrolls smoothly.
- [ ] Keyboard dismisses on drag while scrolling messages.
- [ ] Send/gift/heart action buttons remain tappable.

### Profile (`app/(tabs)/profile.tsx`)
- [ ] Profile summary renders; rows and separators align correctly.
- [ ] Quick actions show icon-first layout and press feedback.

### User Profile (`app/user-profile.tsx`)
- [ ] Back navigation still works.
- [ ] Stats/details sections render with separators.
- [ ] CTA button remains visible and tappable.

## Evidence Log
(Entries appended per commit below.)

### Evidence — Commit: feat(ui): add reduced-motion + flat ui primitives
- What changed (files):
  - `constants/theme.ts`
  - `hooks/use-reduced-motion.ts`
  - `components/ui/animated-pressable.tsx`
  - `components/ui/icon-button.tsx`
  - `components/ui/flat-section.tsx`
  - `components/ui/separator.tsx`
  - `components/ui/list-row.tsx`
  - `components/ui/card-skeleton.tsx`
  - `components/ui/filter-chip.tsx`
  - `components/ui/search-bar.tsx`
  - `components/ui/screen-header.tsx`
  - `MOBILE_UI_UX_AUDIT_AND_PLAN_11_02_2026.md`
- Before/after notes:
  - Added shared press feedback wrapper with reduced-motion support.
  - Added flat section/separator/list-row/icon-button primitives for non-card UI language.
  - Made skeleton loader respect Reduce Motion.
  - Standardized header/chip/search actions onto shared interaction behavior.
- Manual test:
  - Toggle OS Reduce Motion and verify skeleton pulse disables.
  - Tap header icons/chips/search action and verify subtle press feedback.
