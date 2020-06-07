import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";

class ClubSite extends React.Component<Props,State>{
    constructor(props: Props){
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
    componentDidMount(){
        this.setState({team: this.props.location.state});
        console.log(this.props.location.state)
    }
    render(){
        return(
        <h1>a {this.state.team.european_titles}</h1>
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