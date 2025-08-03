import type { Square } from 'chess.js';
import { ChessBoard } from './components/ChessBoard';
import { GameInfo } from './components/GameInfo';
import { GameControls } from './components/GameControls';
import { useChessGame } from './hooks/useChessGame';

function App() {
  const { gameState, makeMove, resetGame, undoMove, getGameStatus } = useChessGame();

  const handlePieceDrop = (sourceSquare: Square, targetSquare: Square): boolean => {
    const result = makeMove(sourceSquare, targetSquare);
    return result.success;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Chess Game
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Game Info */}
          <div className="lg:col-span-1">
            <GameInfo
              status={getGameStatus()}
              currentTurn={gameState.currentTurn}
              moveHistory={gameState.moveHistory}
            />
          </div>
          
          {/* Center Column - Chess Board */}
          <div className="lg:col-span-1 flex justify-center">
            <ChessBoard
              position={gameState.game.fen()}
              onPieceDrop={handlePieceDrop}
            />
          </div>
          
          {/* Right Column - Game Controls */}
          <div className="lg:col-span-1">
            <GameControls
              onNewGame={resetGame}
              onUndoMove={undoMove}
              onResetGame={resetGame}
              canUndo={gameState.moveHistory.length > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
