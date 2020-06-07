import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import { t } from "../../i18n/util";

interface Props {
    key: number;
    team: {
        name: string;
        country: string;
        value: number;
        image: string;
        european_titles: number;
    };
}

const ListEntry: React.FC<Props> = ({ team }) => {
    return <ListItem button>
        <ListItemAvatar>
            <Avatar src={team.image} />
        </ListItemAvatar>
        <ListItemText primary={team.name} secondary={
            <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                >
                    {team.country}&nbsp;
                </Typography>
                {team.value}&nbsp;{t("screen.listentry.million")}&nbsp;{t("screen.listentry.euro")}
            </React.Fragment>
        } />
    </ListItem>
};

export default ListEntry;