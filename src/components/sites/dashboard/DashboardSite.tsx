import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import * as React from "react";
import { t, setLocale } from "../../../i18n/util";
import { generalStore } from "../../../stores/GeneralStore";
import { authStore } from "../../../stores/AuthStore";
import { history } from "../../routers/history";
import { Routes } from "../../routers/Routes";
import TeamList from "../../ui/TeamList";

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
                    <h1 style={{ margin: 24, textAlign: "center" }}>
                        <p>{t("screen.dashboard.hello")}</p>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setLocale("de");
                            }}
                            style={{ marginRight: 8 }}
                            disabled={generalStore.locale === "de"}
                        >
                            {t("language.german")}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setLocale("en");
                            }}
                            disabled={generalStore.locale === "en"}
                        >
                            {t("language.english")}
                        </Button>
                        <div>
                            <Button
                                onClick={() => {
                                    authStore.logout();
                                    history.push(Routes.ROOT);
                                }}
                            >
                                Logout
                        </Button>
                        </div>
                    </h1>
                    <TeamList teams={this.state.teams}></TeamList>
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