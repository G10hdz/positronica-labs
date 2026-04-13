# Design System Specification: The Ethereal Laboratory

## 1. Overview & Creative North Star
**Creative North Star: "The Clinical Sublime"**

This design system moves beyond the clichéd "dark mode" sci-fi aesthetic to embrace a high-fidelity, clinical, and luminous vision of the future. It reflects a world where advanced AI research is conducted in spaces of absolute clarity, light, and mathematical precision.

The system breaks away from standard "boxed" web layouts by utilizing **Asymmetric Data Visualization** and **Layered Translucency**. By overlapping glass surfaces and utilizing a "No-Line" philosophy, we create a UI that feels less like a website and more like a high-end holographic projection. Every element should feel as though it is floating in a pressurized, dust-free environment—intentional, weightless, and premium.

---

## 2. Colors & Surface Logic

The palette is anchored in high-contrast neutrals (Black/White) softened by a sophisticated Lavender core. 

### Core Palette
- **Primary (Lavender):** `#C4B5E3` (Logic: The primary engine of the brand. Use for key actions and highlights.)
- **Background:** `#FFFFFF` with a 5% opacity dot grid texture (Logic: Provides a tactile, engineered feel to the void.)
- **Accent Tokens:** Pink (Biological), Green (Synthetic), Gold (Quantum). Use exclusively for particle systems, status indicators, or data visualization.

### The "No-Line" Rule
Standard 1px solid borders are strictly prohibited. Sectioning must be achieved through:
1.  **Tonal Shifts:** Moving from `surface-container-lowest` to `surface-container-low`.
2.  **Ghost Borders:** Use the `outline-variant` token at 15% opacity (RGBA Lavender).
3.  **Animated Dividers:** Use 1px height gradient lines (Lavender → Pink → Lavender) to separate major vertical content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked architectural glass sheets.
- **Level 0 (Base):** `surface` (#F6F6F6) + Dot Grid.
- **Level 1 (Nesting):** `surface-container-low` for large content areas.
- **Level 2 (Active Components):** `surface-container-highest` or Glassmorphism (White @ 70% + 16px Backdrop Blur).
- **The Glass Principle:** Floating panels must use `backdrop-filter: blur(16px)` to allow the background dot grid to softly bleed through, ensuring the UI feels integrated into the environment.

---

## 3. Typography

The typographic system creates a tension between the "Constructed" (Orbitron) and the "Functional" (Inter).

| Level | Token | Font Family | Case | Tracking | Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Orbitron | Uppercase | 0.05em | For heroic data points. |
| **Headline** | `headline-lg` | Orbitron | Uppercase | 0.1em | Structural anchors only. |
| **Title** | `title-md` | Inter | Sentence | Standard | High-readability section titles. |
| **Body** | `body-md` | Inter | Sentence | Standard | For research data/descriptions. |
| **Metadata** | `label-sm` | Inter | Uppercase | 0.2em | Technical specs & timestamps. |

**Director's Note:** Never use Orbitron for body copy. It is a structural element, not a reading element. For an editorial feel, pair a `display-lg` Orbitron number with a `label-sm` Inter description offset by 24px.

---

## 4. Elevation & Depth

We eschew traditional drop shadows for **Luminous Layering**.

*   **The Layering Principle:** Instead of shadows, use the `surface-container` tiers. A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "lift."
*   **Ambient Glows:** When a floating effect is required (e.g., a hover state), use a Lavender Glow (`primary` at 20% opacity) with a 24px blur radius. Avoid black shadows; the light should feel like it's coming from the UI itself.
*   **Z-Axis Interaction:** On hover, elements should "lift" by 4px via a transform, accompanied by the Ghost Border transitioning from 15% to 40% opacity.

---

## 5. Components

### Buttons
*   **Primary:** A horizontal gradient (Lavender-to-Periwinkle) with Black (`#000000`) text. No border. Sharp corners (`none` or `sm` rounding).
*   **Secondary (Ghost):** No background. Ghost Border (Lavender 15%). Lavender text.
*   **States:** On hover, the primary button gains a 4px lift and a subtle lavender outer glow.

### Cards & Lists
*   **Constraint:** No dividers. Separate items using `surface-container` shifts or `24px` of vertical white space.
*   **Data Cards:** Use Glassmorphism (70% opacity white) with a 1px Ghost Border. 

### Form Inputs
*   **Input Fields:** Bottom-border only (Ghost Border logic). When active, the bottom border animates into a Lavender-to-Pink gradient. 
*   **Checkboxes/Radios:** Use sharp-edged boxes (`sm` rounding). Selected state: Solid Lavender with a white checkmark.

### Scrollbar
*   **Track:** Transparent.
*   **Thumb:** 6px width, Solid Lavender (`#C4B5E3`), no rounding.

### Contextual Components
*   **Status Particles:** Small 4px circles using Pink, Green, or Gold accents. Use CSS animation to make them "pulse" or float slightly to mimic a living AI system.
*   **The Terminal Label:** Use `label-sm` (Uppercase, 0.2em spacing) for all technical readouts, always preceded by a `>` character.

---

## 6. Do's and Don'ts

### Do
*   **Use Asymmetry:** Place labels at the edges of the grid to create an "engineering blueprint" feel.
*   **Embrace White Space:** Allow the dot grid background to breathe; it is a design element, not just a void.
*   **Layer Glass:** Overlap glass panels to create "milky" areas of high blur where information is densest.

### Don't
*   **Don't use 100% Opacity Borders:** High-contrast lines shatter the "luminous" illusion.
*   **Don't use Standard Shadows:** Avoid "dirty" grey shadows. Use Lavender-tinted glows or tonal stacking.
*   **Don't Round Corners Heavily:** Stick to `none`, `sm`, or `md`. This is a high-tech lab, not a consumer social app. Large rounded corners feel too "soft" for this aesthetic.