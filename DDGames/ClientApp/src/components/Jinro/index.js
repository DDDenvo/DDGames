import React from "react";
import Characters from "./Characters";

const Jinro = () => {
    return (
        <div>
            {"Jinro"}
            <div>
                {Characters.map((chara) => {
                    return (
                        <div>
                            {chara.Name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (Jinro);