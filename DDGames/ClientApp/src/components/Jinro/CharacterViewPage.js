import React from "react";
import { useHistory } from "react-router-dom";
import {
    Button,
    Tooltip,
} from "@material-ui/core";

import Characters from "./Characters";
import Status from "./Status";

const CharacterViewPage = () => {

    const history = useHistory();

    const CharacterViewer = (props) => {

        const { Name, Param01, Param02 } = { ...props };

        const StatusGraph = ({status, value}) => {
            return (
                <div>
                    {status.name}
                    {`${value}/${status.max}`}
                    {`${status.description}`}
                </div>
            )
        }

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {Name}
                            </td>
                            <td>
                                {StatusGraph({ status: Status[0], value: Param01})}
                                {StatusGraph({ status: Status[1], value: Param02})}
                                
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )

    }

    return (
        <div>
            <Button
                variant={"contained"}
                onClick={() => history.goBack()}
            >
                {"戻る"}
            </Button>

            {Characters.map((chara) => {
                return (
                    <div key={chara.ID}>
                        {CharacterViewer(chara)}
                    </div>
                )
            })}
        </div>
    )
}

export default (CharacterViewPage);