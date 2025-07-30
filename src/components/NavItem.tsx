import type {FC} from "react";

type Props = {
    text:string
    changePage: (page:string) => void;
}

const NavItem:FC<Props> = ({text, changePage}) => {
    return <li
    onClick={() => {
        changePage(text)
    }}>{text}</li>
};

export default NavItem;