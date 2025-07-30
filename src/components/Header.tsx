import Navigation from "./Navigation.tsx";
import type {FC} from "react";

type Props ={
    changePage: (page:string) => void;
}

const Header:FC<Props> = ({changePage}) => {
    return (
        <header>
            <Navigation changePage={changePage}/>
            <h1>Luke Skywalker</h1>
        </header>
    );
};

export default Header;