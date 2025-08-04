import React, { useState } from 'react';
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
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

  const handleSquareClick = ({ square }: { square: string }) => {
    if (selectedSquare === null) {
      // First click - select a piece
      setSelectedSquare(square as Square);
    } else {
      // Second click - move piece
      if (selectedSquare !== square) {
        const success = onPieceDrop(selectedSquare, square as Square);
        if (success) {
          setSelectedSquare(null); // Clear selection after successful move
        }
      } else {
        // Clicked the same square - deselect
        setSelectedSquare(null);
      }
    }
  };

  const handlePieceClick = ({ square }: { square: string | null }) => {
    if (square) {
      // Same logic as square click for piece selection
      handleSquareClick({ square });
    }
  };

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
            onSquareClick: handleSquareClick,
            onPieceClick: handlePieceClick,
            boardOrientation: 'white',
            squareStyles: selectedSquare ? {
              [selectedSquare]: {
                backgroundColor: 'rgba(255, 255, 0, 0.6)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 255, 0, 0.8)'
              }
            } : {},
          }}
        />
      </div>
    </div>
  );
}; 