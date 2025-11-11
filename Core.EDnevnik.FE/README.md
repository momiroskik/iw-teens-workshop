# E-Grade Frontend

This is the frontend application for E-Grade (Електронски дневник) - an electronic gradebook system for students and teachers.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Routing
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **React Toastify** - Toast notifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Build

Build the app for production:
```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # React components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── routes/         # Route configuration
├── services/       # API services
├── utils/          # Utility functions
└── constants/      # Constants and configuration
```

## Features

- User authentication (Login/Register)
- Role-based access (Teacher/Student)
- Student grade management
- Modern, responsive UI design

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
