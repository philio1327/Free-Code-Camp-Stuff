const { useState, useEffect } = React;

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const [theme, setTheme] = useState("retro");

  // Update <body> class when theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const checkWinner = (board) => {
        for (const [a, b, c] of winningCombos) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (squares[index] || winner) return;

        const newSquares = [...squares];
        newSquares[index] = player;
        setSquares(newSquares);

        const maybeWinner = checkWinner(newSquares);
        if (maybeWinner) {
            setWinner(maybeWinner);
        } else if (newSquares.every(cell => cell !== null)) {
            setWinner("Draw");
        } else {
            setPlayer(player === "X" ? "O" : "X");
        }
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setPlayer("X");
        setWinner(null);
    };

    return (
        <div className="container">
            <h1>Tic-Tac-Toe</h1>

            {/* Theme Selector */}
            <label htmlFor="theme-select">Choose Theme: </label>
            <select
                id="theme-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
            >
                <option value="retro">Retro</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="cyberpunk">Cyberpunk</option>
            </select>
            <h3 id="game-status">
                {winner === "Draw"
                    ? "It's a draw!"
                    : winner
                        ? `Winner: ${winner}`
                        : `Next Player: ${player}`}
            </h3>
            <div className="grid">
                {squares.map((value, index) => (
                    <button
                        key={index}
                        className="square"
                        onClick={() => handleClick(index)}
                    >{value}</button>
                ))}
            </div>
            <button type="reset" id="reset" onClick={handleReset}>Reset</button>
        </div>
    );
}