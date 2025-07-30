import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import {Component} from "react";

type State = {
    page: string,
}

class App extends Component<object,State> {
    constructor(props: object) {
        super(props);
        this.state = {
            page: "Home",
        }
    }

    chanhgePage = (page:string) => {
        this.setState({page: page})
    }

    render() {

        return (
            <>
                <Header changePage={this.chanhgePage}/>
                <Main page={this.state.page} />
                <Footer/>
            </>
        )
    }
}

export default App