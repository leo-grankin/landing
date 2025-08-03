import { Chess } from 'chess.js';

export interface GameState {
  game: Chess;
  isCheck: boolean;
  isCheckmate: boolean;
  isStalemate: boolean;
  isDraw: boolean;
  currentTurn: 'w' | 'b';
  moveHistory: string[];
}

export interface MoveResult {
  success: boolean;
  message?: string;
  gameState?: GameState;
} 