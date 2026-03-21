# Design System Specification: The Executive Portfolio

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system moves away from the "template-heavy" look of traditional job boards. Instead, it adopts the persona of a high-end editorial gallery. It treats a candidate's career not as a list of data points, but as a curated exhibition. 

To achieve this, we break the rigid "box-in-a-box" layout of standard Material UI. We utilize **intentional asymmetry**, where text-heavy sections are balanced by expansive white space, and **tonal layering**, where depth is felt through color shifts rather than seen through lines. The result is an interface that feels authoritative, expert, and bespoke—essential for high-level recruiter screening.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Deep Sea" navy and a "Living Emerald" accent. It is designed to feel expensive and stable.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section off content. 
Boundaries must be created through background shifts. For example, a profile sidebar should be `surface-container-low` (#f2f4f6) sitting against a `background` (#f7f9fb) main content area. This creates "soft boundaries" that feel more sophisticated than hard strokes.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-transparent sheets.
- **Base:** `surface` (#f7f9fb)
- **Secondary Sections:** `surface-container-low` (#f2f4f6)
- **Interactive Cards:** `surface-container-lowest` (#ffffff)
- **High-Impact Overlays:** `surface-bright` (#f7f9fb)

### The "Glass & Gradient" Rule
To elevate the primary CTA from "standard button" to "premium interaction," use a subtle linear gradient. Transition from `tertiary_fixed_dim` (#4edea3) to `on_tertiary_container` (#00ad78) at a 135-degree angle. For floating navigation or recruiter filters, apply a `backdrop-blur` of 12px to a 80% opacity `surface` color to achieve a "frosted glass" effect.

---

## 3. Typography
We pair the geometric confidence of **Manrope** for headers with the Swiss-style readability of **Inter** for data.

- **Display & Headlines (Manrope):** These are the "editorial" voice. Use `display-lg` (3.5rem) for the candidate's name or key metrics. The characterful, wide stance of Manrope signals modern authority.
- **Titles & Body (Inter):** Inter is used for the "evidence." It is highly legible at small sizes. `body-md` (0.875rem) is the workhorse for resume bullet points and recruiter notes.
- **Labels (Inter Bold):** Use `label-md` (0.75rem) in all-caps with 0.05em letter spacing for metadata (e.g., "SKILLS," "EXPERIENCE") to provide a structural anchor to the page.

---

## 4. Elevation & Depth
Depth in this system is organic, not artificial. We mimic natural ambient light.

### The Layering Principle
Avoid "Drop Shadows" on standard cards. Instead, use the **Tonal Stack**:
1. Page Background: `surface`
2. Main Content Wrapper: `surface-container`
3. Hovered Card: `surface-container-lowest` + Ambient Shadow.

### Ambient Shadows
When a card must float (e.g., a candidate's featured project), use an ultra-diffused shadow:
`box-shadow: 0 20px 40px rgba(19, 27, 46, 0.06);`
The shadow color is derived from the `primary` (#131b2e) token at low opacity, ensuring the shadow feels like a natural extension of the brand's navy, not a generic grey.

### The "Ghost Border" Fallback
If contrast ratios require a boundary (e.g., in high-contrast mode), use a **Ghost Border**: `outline-variant` (#c6c5d4) at 20% opacity. Never use 100% opacity for lines.

---

## 5. Components

### Buttons
- **Primary:** `tertiary` (#002113) background with `on_tertiary` (#ffffff) text. Apply a `xl` (1.5rem) roundedness for a friendly, modern feel.
- **Secondary:** `primary_container` (#282f44) with `primary_fixed` (#dae2fd) text. Use for less critical actions like "Download PDF."
- **Tertiary/Ghost:** No background. Use `primary` text with an underline that appears only on hover.

### Cards & Lists
- **The "No-Divider" Rule:** Forbid the use of horizontal lines between list items. Instead, use a `3` (1rem) spacing scale gap. 
- **The Resume Timeline:** Instead of a vertical line, use a subtle background shift in the date-column using `surface-container-highest` (#e0e3e5).

### Input Fields
- **High-End Inputs:** Eschew the four-sided box. Use a "bottom-line only" approach or a very soft `surface-container-lowest` fill with a `sm` (0.25rem) corner radius. Labels should always be `label-sm` floating above the field.

### Chips (Skills & Tags)
- Use `secondary_container` (#d5e3fd) with `on_secondary_container` (#57657b). For specialized skills, use the emerald `tertiary_fixed` (#6ffbbe) to make them pop.

---

## 6. Do’s and Don’ts

### Do:
- **Use "White Space" as a Component:** Treat empty space as a structural element to group related concepts.
- **Leverage Asymmetry:** Place a large headline on the left and a small supporting paragraph on the right to create an editorial feel.
- **Use "Surface Tint":** Apply a 2% `surface_tint` overlay on top of images to make them feel integrated into the brand's color space.

### Don’t:
- **Don't use pure black:** Use `primary` (#131b2e) for text to maintain the "sophisticated navy" depth.
- **Don't use default MUI shadows:** They are too tight and dark. Always use the Ambient Shadow spec.
- **Don't crowd the edges:** Maintain a minimum padding of `8` (2.75rem) on all container edges to ensure the "Premium" feel is not lost to clutter.
- **Don't use 1px dividers:** If you feel the need for a line, try using a 4px wide gap or a subtle color change first.