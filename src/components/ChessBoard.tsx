import React from 'react';
import { Chessboard } from 'react-chessboard';
import type { Square } from 'chess.js';

interface ChessBoardProps {
  position: string;
  onPieceDrop: (sourceSquare: Square, targetSquare: Square) => boolean;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({
  position,
  onPieceDrop,
}) => {
  return (
    <div className="flex justify-center w-full p-4">
      <div 
        style={{ 
          width: 'min(90vw, 400px)',
          height: 'min(90vw, 400px)',
          maxWidth: '400px',
          maxHeight: '400px'
        }}
      >
        <Chessboard
          options={{
            position,
            onPieceDrop: ({ sourceSquare, targetSquare }) => {
              return onPieceDrop(sourceSquare as Square, targetSquare as Square);
            },
            boardOrientation: 'white',
          }}
        />
      </div>
    </div>
  );
}; 