import React from "react";
import Characters from "./Characters";
import { useHistory, Link } from "react-router-dom";

const Jinro = () => {

    const history = useHistory();

    return (
        <div>
            {"Jinro"}
            <Link to={"/Characters"}>{"紹介"}</Link>
        </div>
    )
}

export default (Jinro);