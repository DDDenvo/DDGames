import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    board: {
        width: "80vmin",
        margin: "1vmin 10vmin"
    },
    square: {
        width: `${80 / 8}vmin`,
        height: `${80 / 8}vmin`,
        backgroundColor: "rgba(0, 128, 0, 1)",
        float: "left",
        border: "1px solid black",
        boxSizing: "border-box",

        "& div": {
            width: "90%",
            height: "90%",
            margin: `5% auto`,
            borderRadius: "50%",

            verticalAlign: "middle"
        },
    },
    turnSquare: {
        clear: "left",
    },
    black: {
        backgroundColor: "black",
    },
    white: {
        backgroundColor: "white",
    },
    current: {
        border: "2px dotted red",
    },

    able: {
        border: "2px dashed rgba(200, 255, 200, 1)",
        "&:hover": {
            backgroundColor: "rgba(0, 100, 0, 1)"
        },
    },
});

export const Board = () => {
    const classes = useStyles();

    const [kuro, setKuro] = useState(true);
    const [board, setBoard] = useState([
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 2, 1, 0, 0, 0,
        0, 0, 0, 1, 2, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [current, setCurrent] = useState(null);

    /** 指定したマスに石を置く */
    const handleBoardChange = (index) => {

        let tmpBoard = [...board];

        /** 再帰的に走査して石の状態を変更する */
        const ChangeStone = (i, l) => {
            let returnValue = false;
            const check = (flag, value) => {
                if (flag) {
                    if (i % 8 !== 0 && i % 8 !== 7) {
                        if (ChangeStone(i + l, l)) {
                            tmpBoard[i] = value;
                            returnValue = true;
                        }
                    }

                } else {
                    returnValue = true;
                }
            }

            switch (tmpBoard[i]) {
                case 1:
                    check(!kuro, 2);
                    break;
                case 2:
                    check(kuro, 1);
                    break;
                default:
                    break;
            }
            return returnValue;
        }

        // 指定したマスに石を置く
        if (tmpBoard[index] === 0) {
            tmpBoard[index] = kuro ? 1 : 2;

            // 指定したマスの周囲を再帰的に調べる
            if (index > 0 && index % 8 !== 0) ChangeStone(index - 1, -1);
            if (index < 63 && index % 8 !== 7) ChangeStone(index + 1, 1);
            if (index > 7 && index / 8 > 0) ChangeStone(index - 8, -8);
            if (index < 56 && index / 8 <= 7) ChangeStone(index + 8, 8);
            if (index > 8 && index % 8 !== 0 && index / 8 > 1) ChangeStone(index - 9, -9);
            if (index > 7 && index % 8 !== 7 && index / 8 > 1) ChangeStone(index - 7, -7);
            if (index < 56 && index % 8 !== 0 && index / 8 <= 7) ChangeStone(index + 7, 7);
            if (index < 55 && index % 8 !== 0 && index / 8 <= 7) ChangeStone(index + 9, 9);

            setBoard(tmpBoard);
            setKuro(!kuro);
            setCurrent(index);
        } else {
            console.log("石を置けない");
        }


    }

    /** 石の数を数える */
    const countStone = (value) => {
        let count = 0;
        board.forEach((item) => {
            if (item === value) {
                count++;
            }
        });
        return count;
    }

    const checkAble = (index) => {
        let tmpValue = false;

        const ChangeStone = (i, l) => {
            let returnValue = false;
            const check = (flag, value) => {
                if (flag) {
                    if (i % 8 !== 0 && i % 8 !== 7) {
                        if (ChangeStone(i + l, l)) {
                            tmpValue = true;
                            returnValue = true;
                        }
                    }

                } else {
                    returnValue = true;
                }
            }

            switch (board[i]) {
                case 1:
                    check(!kuro, 2);
                    break;
                case 2:
                    check(kuro, 1);
                    break;
                default:
                    break;
            }
            return returnValue;
        }

        if (board[index] === 0) {
            if (index > 0 && index % 8 !== 0) ChangeStone(index - 1, -1);
            if (index < 63 && index % 8 !== 7) ChangeStone(index + 1, 1);
            if (index > 7 && index / 8 > 0) ChangeStone(index - 8, -8);
            if (index < 56 && index / 8 <= 7) ChangeStone(index + 8, 8);
            if (index > 8 && index % 8 !== 0 && index / 8 > 1) ChangeStone(index - 9, -9);
            if (index > 7 && index % 8 !== 7 && index / 8 > 1) ChangeStone(index - 7, -7);
            if (index < 56 && index % 8 !== 0 && index / 8 <= 7) ChangeStone(index + 7, 7);
            if (index < 55 && index % 8 !== 0 && index / 8 <= 7) ChangeStone(index + 9, 9);

        }
        return tmpValue;
    }

    return (
        <div>
            <div>
                <div>{`黒:白 = ${countStone(1)}:${countStone(2)}`}</div>
            </div>
            <div className={classes.board}>
                {board.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={`${index % 8 === 0 ? classes.turnSquare : ""}`}
                        >
                            <div
                                className={`${classes.square} ${index === current ? classes.current : ""} ${checkAble(index) ? classes.able : ""}`}
                                onClick={() => {
                                    if (checkAble(index)) {

                                        handleBoardChange(index)
                                    }
                                }}
                            >
                                {value !== 0 &&
                                    <div className={`${value === 1 ? classes.black : classes.white}`}></div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}