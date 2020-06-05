import { observer } from "mobx-react";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Route, Router, Switch } from "react-router-dom";
import { graphqlClient } from "../../graphql/graphqlClient";
import { generalStore } from "../../stores/GeneralStore";
import { DashboardSite } from "../sites/dashboard/DashboardSite";
import { NotFoundSite } from "../sites/NotFoundSite";
import { LoadingOverlay } from "../ui/LoadingOverlay";
import { DashboardRouter } from "./DashboardRouter";
import { history } from "./history";
import { NoAuthOnlyRoute } from "./NoAuthOnlyRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Routes } from "./Routes";
import { RoutingManager } from "./RoutingManager";

export const AppRouter = observer(() => (
    <ApolloProvider client={graphqlClient}>
        <Router history={history}>
            <Route component={DashboardSite} />
        </Router>
        {generalStore.isLoading && <LoadingOverlay />}
    </ApolloProvider>
));
