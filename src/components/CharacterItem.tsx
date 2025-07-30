import type {FC} from "react";
import type {Character} from "../types";

type Props ={
    charInfo: Character
    changeChar: (id:number) => void;
}

const CharacterItem:FC<Props> = ({charInfo, changeChar}) => {
    return (
        <li onClick={() => {
            changeChar(charInfo.id)
        }}>
            {charInfo.name}
        </li>
    );
};

export default CharacterItem;