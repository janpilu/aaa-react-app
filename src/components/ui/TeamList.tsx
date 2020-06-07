import React from "react";
import { List } from "@material-ui/core";
import ListEntry from "./ListEntry";
import { Link } from "react-router-dom";
import {generalStore} from "../../stores/GeneralStore"
import { Routes } from "../routers/Routes";

interface Props {
    teams: [];
}

const TeamList: React.FC<Props> = ({teams}) => {
    return <List>
        {teams.map((team, key)=>{
            return(
                <Link to={{pathname: Routes.DASHBOARD.CLUB, state:team}}  style={{ textDecoration: 'none' }}>
                    <ListEntry team={team} key={key} />
                </Link>
            )
        })}
    </List>
}

export default TeamList;