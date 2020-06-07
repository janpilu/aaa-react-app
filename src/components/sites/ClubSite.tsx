import * as React from "react";
import {  Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Grid } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { generalStore } from "../../stores/GeneralStore";
import { t, setLocale } from "../../i18n/util";
import { Routes } from "../routers/Routes";

const languagebtn = {
    marginLeft: 'auto'
};

const logobg = {
    background: '#383838'
};

const country = {
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    color: "white",
    fontWeight: 500
}

const desc = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    paddingTop: "1rem"
}

const logo = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem"
}

const toggleLanguage = () => {
    if (generalStore.locale === "de") {
        setLocale("en")
    } else {
        setLocale("de")
    }
}

class ClubSite extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            team: {
                name: "",
                country: "",
                value: 0,
                image: "",
                european_titles: 0
            }
        }
    }
    componentDidMount() {
        this.setState({ team: this.props.location.state });
        console.log(this.props.location.state)
    }
    render() {
        return (<div>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to={Routes.DASHBOARD.ROOT}>
                        <IconButton style={{ color: "white" }} aria-label="translate">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6">{this.state.team.name}</Typography>
                    <IconButton color="inherit" aria-label="translate" style={languagebtn} onClick={toggleLanguage}>
                        <LanguageIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <div style={logobg}>
                <Grid container justify="center" alignItems="center">
                    <img src={this.state.team.image} width="250rem" style={logo} alt={this.state.team.name+" logo"}/>
                </Grid>
                <strong><Typography variant="h5" style={country}>{this.state.team.country}</Typography></strong>
            </div>
            <div style={desc}>
                <p>{t("screen.club.club")} <b>{this.state.team.name}</b> {t("screen.club.aus")} {this.state.team.country} {t("screen.club.wert")} {this.state.team.value} {t("screen.listentry.million")} {t("screen.listentry.euro")}.</p>
                <br />
                <p><b> {this.state.team.name}</b> {t("screen.club.bisher")} {this.state.team.european_titles} {t("screen.club.erreichen")}.</p>
            </div>
        </div>
        )
    }
}

interface Props {
    location: any;
}
interface State {
    team: {
        name: string;
        country: string;
        value: number;
        image: string;
        european_titles: number;
    };
}

export default ClubSite;