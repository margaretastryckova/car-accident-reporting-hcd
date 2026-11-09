# SafeGuard – Digital Car Accident Report (Mobile Web Prototype)

An interactive, high-fidelity mobile web application prototype designed to streamline on-scene car accident reporting, minimize driver stress, and accelerate insurance claims processing. 

Presented inside a realistic **iPhone 15 Pro hardware mockup** with smooth touch/mouse interactions, animations, and zero build dependencies.

---

## 📱 Live Demo & Running Locally

### Option 1: Direct Local Execution (No installation needed)
1. Clone or download this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Double-click `index.html` (or right-click and open with Chrome, Safari, Edge, or Firefox).
3. That's it! Everything runs directly in any modern browser without npm, webpack, or a local server.

### Option 2: GitHub Pages (Free Instant Hosting)
1. Go to your GitHub repository **Settings** → **Pages**.
2. Under **Build and deployment** > **Branch**, choose `main` (or `master`) and folder `/ (root)`.
3. Click **Save**. Within 1 minute, your prototype will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## ✨ Key Features & Flow Overview

The prototype guides the driver step-by-step through a 9-screen end-to-end journey:

1. **Client Portal Home (Screen 1):** Prominent high-contrast emergency action card (*"Had an accident? Report a Claim Now"*), pre-selected insured vehicle (Škoda Octavia), quick-dial tow truck action, and bottom navigation.
2. **Safety Checklist & Incident Triage (Screen 2):** Non-blocking safety check (hazards, triangle, injuries check), direct SOS sheet modal (112 / 158), and accident category selector.
3. **Connect Counterpart Driver (Screen 3):** Synchronized claim pairing via dynamic QR code or SMS link, connecting Driver B (Jozef Chabron • Toyota RAV4) with fallback for one-phone completion.
4. **Verified Location & Time (Screen 4):** Live GPS map preview with verified address (`Bajkalska 29, Bratislava`), timestamp, and inline location editor.
5. **2D Unfolded Vehicle Damage Blueprint (Screen 5):** Interactive 2D car blueprint allowing drivers to tap damaged body panels (bumpers, doors, hood, fenders) and minor parts (mirrors, lights, wheels) with real-time selection counters.
6. **Guided Photo Checklist (Screen 6):** Clean camera viewfinder using realistic high-resolution accident photos, camera flash animations, progressive slots checklist, and the ability to advance at any time.
7. **Interactive Map Scene Reconstruction (Screen 7):** Drag-and-drop car tokens (Vehicle A: Dusty Peach, Vehicle B: Muted Olive) onto an intersection map (`map.jpg`). Features 360° rotation handles, visual headlights/beams, collision impact star detection, unselected-by-default movement states (Forward, Stopped, Reversing), road context tags, and remarks.
8. **Mutual Driver Review & Statement Lock (Screen 8):** Side-by-side statement comparison, disagreement protocol modal sheet (*"What if drivers disagree?"*), and immutable evidence lock.
9. **Home Claim Tracker & 1-Tap Garage Selection (Screen 9):** Post-accident timeline tracker, 1-tap authorized repair shop selection, pre-filled IBAN payout confirmation, optional notes, and claim submission with celebratory confetti.

---

## 🎨 Design System & Unified Color Palette

The UI follows an accessible, calming color hierarchy optimized for outdoor readability under direct sunlight:

- **Universal Background:** Light Off-White / Old Lace (`#F6F3EE`)
- **Primary Contrast & Typography:** Deep Navy Blue (`#2C365A`) for headings, borders, and main action buttons
- **Secondary Accents:** Soft Butter Yellow (`#F4E6A6`) & Oyster Bay Blue (`#DCECEF`) for highlights and info badges
- **Selected & Damaged Status:** Muted Olive Green (`#606c38`) with Soft Pink (`#ffddd2`) text/icons
- **Vehicle Tokens:**
  - **Vehicle A (User):** Soft Rose / Dusty Peach (`#e29578`) with top label **A** and amber headlights
  - **Vehicle B (Other):** Muted Olive Green (`#606c38`) with top label **B** and amber headlights
- **Calming Companion ("GUY"):** Minimalist character illustrations with step-by-step reassuring speech bubbles and entrance/idle animations.

---

## 📁 Project Structure

```
├── index.html            # Main HTML5 entry point & iPhone 15 mockup chassis
├── css/
│   └── style.css         # Unified palette, layout, transitions & device styling
├── js/
│   └── app.js            # State router, drag-and-drop, camera & interactions
├── assets/               # 100% self-contained production assets
│   ├── background.jpg    # Mobile background texture
│   ├── car-a.png         # Transparent cutout top-down Car A
│   ├── car-b.png         # Transparent cutout top-down Car B
│   ├── guy-waving.png    # Calming companion entrance
│   ├── guy-photo.png     # Calming companion camera guide
│   ├── guy-two.png       # Calming companion pair guide
│   ├── guy-writing.png   # Calming companion review
│   ├── guy-dizzy.png     # Calming companion damage triage
│   ├── location.png      # GPS map preview
│   ├── map.jpg           # Accident intersection map
│   ├── TWOcars.jpg       # Accident scene photo
│   ├── crashedCARdetail.jpg # Damage photo
│   └── SPZ.jpg           # License plate photo
├── .gitignore            # Git exclusion rules
└── README.md             # Project documentation
```

---

## 💡 Quick Navigation
For rapid demonstration and testing, you can jump directly to any screen by appending a hash anchor to the URL:
- `#1` - Client Portal Home
- `#2` - Safety & Triage
- `#3` - Connect Drivers (QR)
- `#4` - Location & Time
- `#5` - 2D Damage Blueprint
- `#6` - Guided Camera
- `#7` - Map Reconstruction
- `#8` - Mutual Review
- `#9` - Claim Tracker
