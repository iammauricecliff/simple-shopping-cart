import React from 'react'
import Board from './Board'

export default function Game() {
    const status = "The Next Player is X";
    const moves = <li><button>Start the Game</button></li>
    const squares = Array(9).fill(null)
    return (
        <div className="game">
            <div className="gameboard">
                <Board squares={squares} />
            </div>
            <div className="gameinfo">
                <div>{status}</div>
                <ul>{moves}</ul>
            </div>
        </div>
    )
}
