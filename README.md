# LTWBB Digital Mental Health Platform

> Let's Talk with Bossbaby CBO | "Conversations Save Lives"

A comprehensive digital platform for mental health advocacy and climate action in Kenya, built with modern web technologies.

## 🎯 Mission

LTWBB CBO creates safe spaces for mental health conversations across Kenya while driving impactful climate action through tree planting and environmental conservation.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **CMS**: Sanity.io
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Vercel Analytics + Google Analytics 4
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ltwbb
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Fill in the required API keys and configuration values.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ltwbb/
├── app/
│   ├── (public)/          # Public-facing pages
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── projects/       # Programs showcase
│   │   ├── resources/      # Mental health articles
│   │   ├── podcast/        # Podcast episodes
│   │   ├── events/          # Events & workshops
│   │   ├── contact/         # Contact information
│   │   ├── crisis/         # Crisis support
│   │   └── donate/         # Donations
│   ├── (auth)/             # Authenticated user pages
│   │   ├── dashboard/      # User dashboard
│   │   ├── booking/        # Counseling booking
│   │   ├── mood/           # Mood tracking
│   │   ├── forum/          # Community forum
│   │   └── ambassador/     # Youth ambassador portal
│   ├── (admin)/            # Admin-only pages
│   │   └── admin/          # Admin dashboard
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CrisisButton.tsx
│   ├── sections/           # Homepage sections
│   ├── cards/              # Reusable card components
│   └── ui/                 # Shadcn/UI components
├── lib/
│   ├── sanity.ts           # Sanity CMS client
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/
    ├── images/
    └── icons/
```

## 🎨 Brand Colors

- **Primary Navy**: `#2C3E8C`
- **Royal Blue**: `#1A73E8`
- **Light Blue**: `#D6E4FF`
- **Dark Text**: `#1A1A2E`
- **Crisis Red**: `#E53935`

## 📱 Features

### Phase 1 (Foundation)
- ✅ Responsive public website
- ✅ Mental health resources hub
- ✅ Crisis support page
- ✅ Program showcase
- ✅ Contact and booking forms
- ✅ CMS integration for content management

### Phase 2 (Community Platform)
- 🔄 User authentication
- 🔄 Counseling booking system
- 🔄 Mood tracking
- 🔄 Anonymous community forum
- 🔄 Youth ambassador portal
- 🔄 Tree planting counter

### Phase 3 (Admin Dashboard)
- ⏳ Admin dashboard
- ⏳ Content management
- ⏳ Impact reporting
- ⏳ User management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Crisis Support

If you or someone you know is in crisis:

- **Befrienders Kenya**: 0800 723 253 (Free, 24/7)
- **Kenya Red Cross**: 1199
- **LTWBB Direct**: +254 714 445791

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Made with ❤️ for LTWBB CBO

"Conversations Save Lives" - Let's Talk with Bossbaby
