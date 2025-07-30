import {navItems} from "../utils/constants.ts";
import NavItem from "./NavItem.tsx";
import type {FC} from "react";

type Props ={
    changePage: (page:string) => void;
}

const Navigation:FC<Props> = ({changePage}) => {
    return (
        <nav>
            <ul>
                {
                    navItems.map((item:string) =>
                    <NavItem key={item} text={item} changePage={changePage}/>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navigation;