import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { DashboardSite } from "../sites/dashboard/DashboardSite";
import { NotFoundSite } from "../sites/NotFoundSite";
import { Routes } from "./Routes";

export const DashboardRouter = () => (
    <Switch>
        <Route exact path={Routes.DASHBOARD.ROOT} component={DashboardSite} />
        <Route component={NotFoundSite} />
    </Switch>
);
