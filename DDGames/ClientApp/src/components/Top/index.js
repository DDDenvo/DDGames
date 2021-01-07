import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import { } from "@material-ui/icons";

const TopPage = () => {

    const [count, setCount] = useState(localStorage.getItem("count") || 0);

    const Counter = () => {

        setCount((_count) => parseInt(_count) + 1);
    }

    const CountReset = () => {
        localStorage.removeItem("count");
        setCount(0);
    }

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count])

    return (
        <div>
            <div>
                {"とっぷぺーじや"}
            </div>
            <div>
                <Button
                    onClick={Counter}
                    variant={"contained"}
                    color={"primary"}
                >
                    {`押せ : ${count} 回`}
                </Button>
            </div>
            <div>
                <Button
                    onClick={CountReset}
                    variant={"outlined"}
                    disabled={count === 0}
                >
                    {"リセット！"}
                </Button>
            </div>
        </div>
    )
}

export default (TopPage);