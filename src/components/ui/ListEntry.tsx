import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import { t } from "../../i18n/util";

interface Props {
    name:string,
    country:string,
    value:number,
    image:string,
    euro_titles:number
}

const ListEntry: React.FC<Props> = ({country,euro_titles,image,name,value}) =>{
    return <ListItem button>
            <ListItemAvatar>
                    <Avatar src={image}/>
            </ListItemAvatar>
          <ListItemText primary={name} secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               {country} 
              </Typography>
              {value} {t("screen.listentry.million")}{t("screen.listentry.euro")}
            </React.Fragment>
          } />
        </ListItem>
}

export default ListEntry;