import {Component} from "react";
import CharacterList from "./CharacterList.tsx";
import type {Character} from "../types";
import CharInfo from "./CharInfo.tsx";



type State = {
    characterID: number
}

class AboutMe extends Component<object, State> {

    characterList: Character[]
    constructor(props: object) {
        super(props)
        this.characterList = []
        this.state = {
            characterID: -1
        }
    }

    async componentDidMount() {
        try {
            const responseChar = await fetch("https://sw-info-api.herokuapp.com/v1/peoples");
            if (!responseChar.ok) throw "Bad request"
            const dataChr = await responseChar.json();
            dataChr.sort((a, b) => a.id > b.id)
            const responsePln = await fetch("https://sw-info-api.herokuapp.com/v1/planets");
            if (!responsePln.ok) throw "Bad request"
            const dataPln = await responsePln.json();
            dataPln.sort((a, b) => a.id > b.id)
            dataChr.map(char => {
                this.characterList.push({
                    id: char.id,
                    name: char.name,
                    birth_year: char.birth_year,
                    gender: char.gender,
                    homeworld: dataPln.find(planet => planet.id === char.homeworld).name
                })
            })
            this.setState({characterID: this.characterList[0].id})
            // console.log(this.characterList)

        } catch (e) {
            console.log(e)
        }

    }

    changeChar = (id:number) => {
        this.setState({characterID:id})
    }

    render() {

        return (

            <div className="aboutMe">
                {this.state.characterID>=0 && <CharacterList changeChar={this.changeChar} characterList={this.characterList}/>}
                {(this.state.characterID>=0 && <CharInfo charInfo={this.characterList.find( char => char.id === this.state.characterID)}/>) ||
                <p>Loading...</p>}
            </div>
        )


    }
}

export default AboutMe;