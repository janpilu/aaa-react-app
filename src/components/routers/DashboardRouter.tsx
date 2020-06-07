import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { DashboardSite } from "../sites/dashboard/DashboardSite";
import { NotFoundSite } from "../sites/NotFoundSite";
import { Routes } from "./Routes";
import ClubSite from "../sites/ClubSite";

export const DashboardRouter = () => (
    <Switch>
        <Route exact path={Routes.DASHBOARD.ROOT} component={DashboardSite} />
        <Route exact path={Routes.DASHBOARD.CLUB} component={ClubSite} />
        <Route component={NotFoundSite} />
    </Switch>
);
