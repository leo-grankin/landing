import React from 'react';

interface GameInfoProps {
  status: string;
  currentTurn: 'w' | 'b';
  moveHistory: string[];
}

export const GameInfo: React.FC<GameInfoProps> = ({ status, currentTurn, moveHistory }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-md mx-auto">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Game Status</h2>
        <div className={`text-sm sm:text-lg font-semibold p-2 sm:p-3 rounded-lg ${
          status.includes('wins') 
            ? 'bg-green-100 text-green-800' 
            : status.includes('Draw') 
            ? 'bg-yellow-100 text-yellow-800'
            : status.includes('check')
            ? 'bg-red-100 text-red-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {status}
        </div>
      </div>
      
      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Current Turn</h3>
        <div className={`inline-block px-3 sm:px-4 py-2 rounded-lg font-medium ${
          currentTurn === 'w' ? 'bg-white text-black border-2 border-gray-300' : 'bg-gray-800 text-white'
        }`}>
          {currentTurn === 'w' ? 'White' : 'Black'}
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">How to Move</h3>
        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
          <p className="text-blue-800 mb-1"><strong>Option 1:</strong> Drag and drop pieces</p>
          <p className="text-blue-800 mb-1"><strong>Option 2:</strong> Click piece, then click destination</p>
          <p className="text-blue-600 text-xs">Selected pieces are highlighted in yellow</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Move History</h3>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 max-h-24 sm:max-h-32 overflow-y-auto">
          {moveHistory.length === 0 ? (
            <p className="text-gray-500 text-xs sm:text-sm">No moves yet</p>
          ) : (
            <div className="text-xs sm:text-sm font-mono">
              {moveHistory.map((move, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{Math.floor(index / 2) + 1}.</span>
                  <span className="text-gray-800">{move}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 