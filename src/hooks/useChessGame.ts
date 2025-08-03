import { useState, useCallback } from 'react';
import { Chess } from 'chess.js';
import type { GameState, MoveResult } from '../types/chess';

export const useChessGame = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const game = new Chess();
    return {
      game,
      isCheck: game.isCheck(),
      isCheckmate: game.isCheckmate(),
      isStalemate: game.isStalemate(),
      isDraw: game.isDraw(),
      currentTurn: game.turn(),
      moveHistory: game.history(),
    };
  });

  const updateGameState = useCallback((game: Chess) => {
    setGameState({
      game,
      isCheck: game.isCheck(),
      isCheckmate: game.isCheckmate(),
      isStalemate: game.isStalemate(),
      isDraw: game.isDraw(),
      currentTurn: game.turn(),
      moveHistory: game.history(),
    });
  }, []);

  const makeMove = useCallback((from: string, to: string, promotion?: string): MoveResult => {
    try {
      const gameCopy = new Chess(gameState.game.fen());
      const moveOptions = promotion ? { from, to, promotion } : { from, to };
      
      const result = gameCopy.move(moveOptions);
      
      if (result === null) {
        return {
          success: false,
          message: 'Invalid move',
        };
      }

      updateGameState(gameCopy);
      
      return {
        success: true,
        gameState: {
          game: gameCopy,
          isCheck: gameCopy.isCheck(),
          isCheckmate: gameCopy.isCheckmate(),
          isStalemate: gameCopy.isStalemate(),
          isDraw: gameCopy.isDraw(),
          currentTurn: gameCopy.turn(),
          moveHistory: gameCopy.history(),
        },
      };
    } catch (error) {
      return {
        success: false,
        message: 'Invalid move',
      };
    }
  }, [gameState.game, updateGameState]);

  const resetGame = useCallback(() => {
    const newGame = new Chess();
    updateGameState(newGame);
  }, [updateGameState]);

  const undoMove = useCallback(() => {
    const gameCopy = new Chess(gameState.game.fen());
    gameCopy.undo();
    updateGameState(gameCopy);
  }, [gameState.game, updateGameState]);

  const getGameStatus = useCallback(() => {
    if (gameState.isCheckmate) {
      return gameState.currentTurn === 'w' ? 'Black wins by checkmate!' : 'White wins by checkmate!';
    }
    if (gameState.isStalemate) {
      return 'Draw by stalemate';
    }
    if (gameState.isDraw) {
      return 'Draw';
    }
    if (gameState.isCheck) {
      return `${gameState.currentTurn === 'w' ? 'White' : 'Black'} is in check`;
    }
    return `${gameState.currentTurn === 'w' ? 'White' : 'Black'}'s turn`;
  }, [gameState]);

  return {
    gameState,
    makeMove,
    resetGame,
    undoMove,
    getGameStatus,
  };
}; 