import * as React from "react";
import { Route, Router, Switch, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { generalStore } from "../../stores/GeneralStore";
import { t, setLocale } from "../../i18n/util";
import { Routes } from "../routers/Routes";

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
            <AppBar>
                <Toolbar>
                    <Link to={Routes.DASHBOARD.ROOT}>
                        <IconButton style={{color: "white"}} aria-label="translate">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6">{this.state.team.name}</Typography>
                    <IconButton color="inherit" aria-label="translate" style={languagebtn} onClick={toggleLanguage}>
                        <LanguageIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
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