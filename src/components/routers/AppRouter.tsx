import { observer } from "mobx-react";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import {  Router } from "react-router-dom";
import { graphqlClient } from "../../graphql/graphqlClient";
import { generalStore } from "../../stores/GeneralStore";
import { LoadingOverlay } from "../ui/LoadingOverlay";
import { DashboardRouter } from "./DashboardRouter";
import { history } from "./history";

export const AppRouter = observer(() => (
    <ApolloProvider client={graphqlClient}>
        <Router history={history}>
            <DashboardRouter />
        </Router>
        {generalStore.isLoading && <LoadingOverlay />}
    </ApolloProvider>
));
