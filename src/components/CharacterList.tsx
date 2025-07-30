import CharacterItem from "./CharacterItem.tsx";
import type {FC} from "react";
import type {Character} from "../utils/sw-types";


type Props = {
    changeChar: (id:number) => void
    characterList: Character[]
}


const CharacterList:FC<Props> = (props) => {
    console.log(props.characterList)
    return (
        <div className="characterList">
            <ul>
                {
                    props.characterList.map((char: Character) =>
                        <CharacterItem key={char.id} charInfo={char} changeChar={props.changeChar}/>
                    )
                }
            </ul>
        </div>
    )
}

export default CharacterList;