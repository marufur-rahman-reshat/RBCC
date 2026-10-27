# 🏏 Royal Bengal Cricket Club (RBCC)

Official modern web portal for **Royal Bengal Cricket Club (RBCC)** — featuring squad rosters, player career stats, tournament achievements, live match schedules, news bulletins, and high-resolution photo galleries.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Key Features

- **🏆 Tournaments & Achievements:** Track session-by-session club history, tournament results (championships, runner-up finishes, and semi-finals), and historic records.
- **👥 Squad Roster & Player Stats:** In-depth player profiles with career figures — runs, wickets, strike rate, bowling economy, batting/bowling style, jersey details, and nicknames.
- **👔 Club Leadership & Management:** Profiles for the president, head coach, and executive board members.
- **📅 Match Center & Fixtures:** Detailed schedule of upcoming matches, ongoing games, and completed fixtures with detailed scorelines and venues.
- **📰 Club News & Press Releases:** Match reports, winter camp announcements, and talent selection updates.
- **📸 Categorized Photo Gallery:** Curated photo archive covering Stadium Moments, Team Moments, Match Highlights, Cricket Equipment, and Practice Sessions.
- **📬 Contact & Club Information:** Easy contact channels for friendlies, ground booking, trials, and sponsor inquiries.
- **⚡ Athletic UI / UX Design:** High-contrast dark athletic theme, bold Oswald typography, dynamic angled cuts (`clip-slant`), and fluid Framer Motion animations.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Typography** | [Google Fonts (Oswald & Inter)](https://fonts.google.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |

---

## 📂 Project Structure

```text
├── components/          # Reusable UI components
│   ├── Footer.tsx       # Global footer with club links & social info
│   ├── Layout.tsx       # Base layout wrapper with navigation
│   └── Navbar.tsx       # Responsive athletic navigation bar
├── pages/               # Application route views
│   ├── Contact.tsx      # Contact, location & trial inquiries
│   ├── Gallery.tsx      # Filterable club photo gallery
│   ├── Home.tsx         # Landing page with hero, news, and highlights
│   ├── Landing.tsx      # Introductory banner view
│   ├── Matches.tsx      # Match schedule, fixtures & results
│   ├── Team.tsx         # Player roster, leadership & player stats modal
│   └── Tournaments.tsx  # Tournament history & trophy cabinet
├── constants.ts         # Club data (players, matches, news, gallery, sponsors)
├── types.ts             # TypeScript interfaces and data models
├── App.tsx              # Main routing and layout configuration
├── index.html           # HTML5 entry with Oswald/Inter fonts & styling
├── index.tsx            # React application root mount
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build & development server setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or later recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/royal-bengal-cricket-club.git
   cd royal-bengal-cricket-club
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:3000` (or the URL shown in your terminal).

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on port 3000 |
| `npm run build` | Compiles TypeScript and creates optimized production build |
| `npm run preview` | Locally preview the production build output |

---

## ⚙️ Customization & Updating Club Data

All club-related records and assets are centrally managed in `constants.ts`:

- **Players:** Update the `PLAYERS` array with new squad signings, roles, runs, wickets, and batting/bowling statistics.
- **Leadership:** Add or update club officials in `LEADERSHIP`.
- **Matches:** Add upcoming fixtures or log results in `MATCHES`.
- **News:** Publish fresh articles in `NEWS`.
- **Tournaments:** Log tournament seasons and trophies in `TOURNAMENTS`.
- **Gallery:** Add image links and categorize them in `GALLERY_ITEMS`.

---

## 🌐 Deployment

### GitHub Pages / Static Hosting

This project is built as a Single Page Application (SPA) using Vite. You can deploy it directly to GitHub Pages, Vercel, or Netlify:

1. **Build the production bundle:**
   ```bash
   npm run build
   ```
2. The output will be located in the `dist/` directory, ready to be served by any static web host.

---

## 🤝 Contributing

Contributions, match report additions, and feature suggestions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for <b>Royal Bengal Cricket Club</b>
</p>
