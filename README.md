# Chess Game - MVP 1

A fully functional local chess game built with React, TypeScript, and chess.js.

## ✅ Features Implemented (MVP 1)

- **Interactive Chess Board**: Drag-and-drop piece movement using `react-chessboard`
- **Legal Move Validation**: All chess rules enforced using `chess.js`
- **Game State Detection**: Check, checkmate, stalemate, and draw detection
- **Turn Management**: Automatic turn switching between white and black
- **Move History**: Complete move history displayed in algebraic notation
- **Game Controls**: New game, undo move, and reset functionality
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Play

1. **Starting the Game**: The game starts with white pieces at the bottom
2. **Making Moves**: Click and drag pieces to make moves
3. **Legal Moves**: Only legal chess moves are allowed
4. **Game Status**: The current game status is displayed on the left panel
5. **Move History**: All moves are recorded and displayed
6. **Controls**: Use the buttons on the right panel to control the game

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ChessBoard.tsx      # Main chess board component
│   ├── GameInfo.tsx        # Game status and move history display
│   └── GameControls.tsx    # Game control buttons
├── hooks/
│   └── useChessGame.ts     # Custom hook for game logic
├── types/
│   └── chess.ts           # TypeScript type definitions
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **chess.js** - Chess game logic and validation
- **react-chessboard** - Interactive chess board component
- **Tailwind CSS** - Styling

## 🧪 Testing

The application includes comprehensive chess rule validation:

- ✅ Legal move enforcement
- ✅ Check detection
- ✅ Checkmate detection
- ✅ Stalemate detection
- ✅ Draw conditions
- ✅ Turn management
- ✅ Move history tracking

## 🎯 Next Steps (Future MVPs)

- **MVP 2**: Time controls and countdown timers
- **MVP 3**: Game result screens and statistics
- **MVP 4**: Player statistics tracking
- **MVP 5**: Game review and PGN export
- **MVP 6**: Home and stats screens
- **MVP 7**: Polish and additional features

## 📝 License

This project is open source and available under the MIT License.
