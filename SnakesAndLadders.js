 SnakesAndLadders = function () {
    function SnakesAndLadders() {
        this.currentPositionPlayer1 = 0;
        this.currentPositionPlayer2 = 0;
        this.diceValue = 0;
        this.currentPlayer = -1;
        this.player1Position = 0;
        this.player2Position = 0;
        this.ladderValue = 10;
        this.snakeValue = 7;
    }
    SnakesAndLadders.diceThrow = function () {
        var diceValue = ((Math.random() * (6 - 1)) | 0) + 1;
        SnakesAndLadders.diceRolls++;
        return diceValue;
    };
    SnakesAndLadders.prototype.updatePlayerPosition = function (position, diceValue) {
        var option =  Math.floor(Math.random() * 1);;
        switch ((option)) {
            case 0 /* NO_PLAY */:
                position = position + diceValue;
                if (position > 100) {
                    position = position - diceValue;
                }
                break;
            case 1 /* LADDER */:
                console.info("Congrats, You got a ladder! :)");
                position = position + diceValue + this.ladderValue;
                if (position > 100) {
                    position = position - diceValue - this.ladderValue;
                }
                break;
            case 2 /* SNAKE */:
                console.info("Too bad, bitten by a snake :(");
                position = position + diceValue - this.snakeValue;
                break;
            default:
        }
        return position;
    };
    SnakesAndLadders.prototype.startGame = function () {
        do {
            {
                this.diceValue = SnakesAndLadders.diceThrow();
                if (this.currentPlayer === -1) {
                    console.info("FIRST PLAYER\'S TURN");
                    this.currentPositionPlayer1 = this.updatePlayerPosition(this.player1Position, this.diceValue);
                    this.player1Position = this.currentPositionPlayer1;
                    console.info("Position of first player: " + this.currentPositionPlayer1);
                    if (this.isWin(this.player1Position)) {
                        console.info("First player wins");
                        console.info("Dice is thrown " + SnakesAndLadders.diceRolls + " times.");
                        return;
                    }
                }
                else {
                    console.info("SECOND PLAYER\'S TURN");
                    this.currentPositionPlayer2 = this.updatePlayerPosition(this.player2Position, this.diceValue);
                    this.player2Position = this.currentPositionPlayer2;
                    if (this.player2Position > 100) {
                        this.player2Position = this.player2Position - this.diceValue;
                        this.diceValue = SnakesAndLadders.diceThrow();
                        this.player2Position = this.player2Position + this.diceValue;
                    }
                    console.info("Position of second player: " + this.currentPositionPlayer2);
                    if (this.isWin(this.player2Position)) {
                        console.info("Second player wins");
                        console.info("Dice is thrown " + SnakesAndLadders.diceRolls + " times.");
                        return;
                    }
                }
                this.currentPlayer = -this.currentPlayer;
            }
        } while ((this.currentPositionPlayer1 <= SnakesAndLadders.WIN_POSITION && this.currentPositionPlayer2 <= SnakesAndLadders.WIN_POSITION));
    };
    SnakesAndLadders.prototype.isWin = function (position) {
        return SnakesAndLadders.WIN_POSITION === position;
    };
    SnakesAndLadders.main = function (args) {
        console.info("Welcome to the Snakes and Ladders game");
        var sl = new SnakesAndLadders();
        sl.startGame();
    };
    SnakesAndLadders.NO_PLAY = 0;
    SnakesAndLadders.LADDER = 1;
    SnakesAndLadders.SNAKE = 2;
    SnakesAndLadders.WIN_POSITION = 100;
    SnakesAndLadders.diceRolls = 0;
    return SnakesAndLadders;
}();
SnakesAndLadders["__class"] = "SnakesAndLadders";
SnakesAndLadders.main(null);
