import {Component} from "react";

type State = {
    responseOk:boolean
}

class Contact extends Component<object,State> {
    planetList: string[]

    constructor(props:object) {
        super(props);
        this.planetList = [];
        this.state={responseOk:false}
    }

    async componentDidMount(){
        try{
            const responsePln = await fetch('https://sw-info-api.herokuapp.com/v1/planets');
            if (!responsePln.ok) throw "Bad request"
            const dataPln = await responsePln.json();
            dataPln.sort((a, b) => a.name > b.name)
            dataPln.map(planet => {this.planetList.push(planet.name)})
            this.setState({responseOk:true})
        }
        catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container">
                {(this.state.responseOk && <form>

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" required placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" required placeholder="Your last name.."/>

                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">
                        {this.planetList.map(planet => {return <option value={planet}>{planet}</option>})}
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

                    <input type="submit" value="Submit"/>

                </form>) || <p>Loading...</p>}
            </div>
        );
    }
}

export default Contact;