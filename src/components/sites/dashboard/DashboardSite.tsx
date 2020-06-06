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

const toggleLanguage = () => {
    if (generalStore.locale === "de") {
        setLocale("en")
    } else {
        setLocale("de")
    }
}

@observer
export class DashboardSite extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            sortByVal: true,
            error: null,
            isLoaded: false,
            teams: []
        };
        this.toggleSort = this.toggleSort.bind(this)
    }

    sortTeams() {
        if (this.state.sortByVal) {
            this.setState({ teams: this.state.teams.sort(this.compareVal) });
        } else {
            this.setState({ teams: this.state.teams.sort(this.compareName) });
        }
    }

    toggleSort() {
        this.setState({ sortByVal: !this.state.sortByVal });
        this.sortTeams();
    }

    compareVal(a: any, b: any) {
        if (a.value < b.value) {
            return 1;
        }
        if (a.value > b.value) {
            return -1;
        }
        return 0;
    }

    compareName(a: any, b: any) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
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
                    this.sortTeams()
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
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Soccer Wizard</Typography>
                        <IconButton color="inherit" aria-label="translate" onClick={toggleLanguage}>
                            <LanguageIcon className="languagebutton" />
                        </IconButton>
                        <IconButton color="inherit" aria-label="translate" onClick={this.toggleSort}>
                            <LanguageIcon className="languagebutton" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                {error ?
                    <div>Error: {error.message}</div>
                    : !isLoaded ?
                        <h3>Loading...</h3>
                        : <TeamList teams={teams}></TeamList>
                }

            </div>
        );

    }
}

interface State {
    sortByVal: boolean;
    error: any;
    isLoaded: boolean;
    teams: [];
}

interface Props {
}