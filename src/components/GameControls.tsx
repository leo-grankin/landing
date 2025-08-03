import React from 'react';

interface GameControlsProps {
  onNewGame: () => void;
  onUndoMove: () => void;
  onResetGame: () => void;
  canUndo: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onNewGame,
  onUndoMove,
  onResetGame,
  canUndo,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Game Controls</h2>
      <div className="space-y-2 sm:space-y-3">
        <button
          onClick={onNewGame}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          New Game
        </button>
        
        <button
          onClick={onUndoMove}
          disabled={!canUndo}
          className={`w-full font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
            canUndo
              ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Undo Move
        </button>
        
        <button
          onClick={onResetGame}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}; 