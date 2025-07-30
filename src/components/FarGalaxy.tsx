import {Component} from "react";

type State = {
    info: {
        title: string,
        release_date:string,
        episode_id: number,
        opening_crawl: string,
    }
}


class FarGalaxy extends Component<object, State> {
    constructor(props:object) {
        super(props);
        this.state={
            info:{
                title: "",
                release_date: "",
                episode_id: 0,
                opening_crawl: "Loading",
            }
        }
    }

    async componentDidMount() {
        const ep= Math.trunc(Math.random()*4+1);
        try {
            const response = await fetch("https://sw-info-api.herokuapp.com/v1/films" + "/" + ep);
            if (!response.ok) throw "Bad request"
            const data = await response.json();
            console.log(data.episode)
            this.setState({
                info: {
                    title: data.title,
                    release_date: data.release_date,
                    episode_id: data.episode_id,
                    opening_crawl: data.opening_crawl,
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const info = this.state.info;
        return (
            <p className="farGalaxy">
                Title: <span>{info.title}</span><br/>
                Episode: <span>{info.episode_id}</span><br/>
                Release_date: <span>{info.release_date}</span><br/>
                <span>{info.opening_crawl}</span>
            </p>
        );
    }
}

export default FarGalaxy;