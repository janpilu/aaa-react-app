import { AppBar, Toolbar, Typography, IconButton, makeStyles, Theme, createStyles, Grid, CircularProgress } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import SortIcon from '@material-ui/icons/Sort';
import { observer } from "mobx-react";
import * as React from "react";
import { setLocale } from "../../../i18n/util";
import { generalStore } from "../../../stores/GeneralStore";
import TeamList from "../../ui/TeamList";

const languagebtn = {
    marginLeft: 'auto'
};

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
            error: null,
            isLoaded: false,
            teams: []
        };
        this.toggleSort = this.toggleSort.bind(this)
        this.sortTeams = this.sortTeams.bind(this)
    }

    sortTeams() {
        console.log("sort")
        if (generalStore.sortByVal) {
            this.setState({ teams: this.state.teams.sort(this.compareVal) });
        } else {
            this.setState({ teams: this.state.teams.sort(this.compareName) });
        }
    }

    toggleSort() {
        generalStore.sortByVal=!generalStore.sortByVal
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
                        <IconButton color="inherit" aria-label="translate" style={languagebtn} onClick={toggleLanguage}>
                            <LanguageIcon  />
                        </IconButton>
                        <IconButton color="inherit" aria-label="translate" onClick={this.toggleSort}>
                            <SortIcon className="sortbtn" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                
                <Toolbar />
                {error ?
                    <div>Error: {error.message}</div>
                    : !isLoaded ?
                    <Grid container justify="center" alignItems="center" style={{height: "50rem"}}><CircularProgress /></Grid>
                        : <TeamList teams={teams}></TeamList>
                }
            </div>
        );

    }
}

interface State {
    error: any;
    isLoaded: boolean;
    teams: [];
}

interface Props {
}