import type {FC} from "react";
import type {Character} from "../utils/sw-types";


type Props ={
    charInfo: Character
}

const CharInfo:FC<Props> = ({charInfo}) => {
    return (
        <div className="charInfo">
            <p>Character info</p>
            <p>Name: {charInfo.name}</p>
            <p>Year of birth: {charInfo.birth_year}</p>
            <p>Gender: {charInfo.gender}</p>
            <p>Homeworld: {charInfo.homeworld}</p>
        </div>
    );
};

export default CharInfo;