import { Button, AppBar, Toolbar, Typography, IconButton, makeStyles, Theme, createStyles } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import { observer } from "mobx-react";
import * as React from "react";
import { t, setLocale } from "../../../i18n/util";
import { generalStore } from "../../../stores/GeneralStore";
import { authStore } from "../../../stores/AuthStore";
import { history } from "../../routers/history";
import { Routes } from "../../routers/Routes";
import TeamList from "../../ui/TeamList";

const toggleLanguage = () =>{
    if(generalStore.locale=="de"){
        setLocale("en")
    }else{
        setLocale("de")
    }
}

@observer
export class DashboardSite extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
    }

    componentDidMount() {
        fetch("https://public.allaboutapps.at/hiring/clubs.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        teams: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, teams } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6">Soccer Wizard</Typography>
                            <IconButton color="inherit" aria-label="translate" onClick={toggleLanguage}>
                                <LanguageIcon className="languagebutton" />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                    <TeamList teams={teams}></TeamList>
                </div>
            );
        }
    }
}

interface State {
    error: any;
    isLoaded: boolean;
    teams: [];
}

interface Props {
}