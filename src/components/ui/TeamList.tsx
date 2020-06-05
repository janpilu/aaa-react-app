import React from "react";
import { List } from "@material-ui/core";
import ListEntry from "./ListEntry";

interface Props {
    teams: [];
}

const TeamList: React.FC<Props> = ({teams}) => {
    return <List>
        {teams.map((team)=>{
            return(
                <ListEntry team={team} />
            )
        })}
    </List>
}

export default TeamList;