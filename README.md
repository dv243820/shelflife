# ShelfLife Web-app
Developed by Drew VanAtta - dv243820@ohio.edu

## Project Details
This project is a modern React application to help users track food inventory information such as amounts, expiration dates, price paid, recipes, and more.

## Tech stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Backend**: Node.js/Express
- **Testing**: Vitest

## Project Structure

```
shelflife/
├── client/          # React frontend (Vite)
├── server/          # Node.js backend
└── package.json     # Root package management
```

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client && npm install
   ```

4. Install server dependencies:
   ```bash
   cd server && npm install
   ```

## Available Scripts

### Root Level Commands
```bash
npm start          # Start both client and server concurrently
npm run server     # Start only the backend server
npm run client     # Start only the frontend client
npm run build      # Build the frontend for production
```

### Client Commands (in `/client` directory)
```bash
npm run dev        # Start Vite development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run test       # Run tests with Vitest
npm run test:ui    # Run tests with UI
npm run test:run   # Run tests once (CI mode)
npm run lint       # Check code quality with ESLint
npm run clean      # Clean build directories
```

## Development URLs

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## Environment Variables

Create `.env.development` and `.env.production` files in the `/client` directory:

```env
# Development
VITE_API_URL=http://localhost:5000
VITE_NODE_ENV=development
VITE_ENABLE_DEBUG=true
```

## Features

- Fast development with Vite HMR
- Modern React with hooks and functional components
- Responsive design with Tailwind CSS
- Client-side routing
- API integration ready
- Production-ready builds
- Code quality tools (ESLint)
- Testing setup with Vitest
