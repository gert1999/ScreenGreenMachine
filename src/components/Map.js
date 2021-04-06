import React from "react";

export class Map extends React.Component {
    constructor(){
        super()
        this.state = {
            calculate : false
        }
    }

    componentDidMount(){
        console.log("DidMount Project");
    }
    
    componentDidUpdate(){
        console.log("DidUpdate Project");
    }
    
    componentWillUnmount(){
        console.log("WillUnmount Project");
    }

    calculate(){
        this.setState({
            calculate : true
        })
    }
    
    render() {
        let map =
            <div className="main">
                <map>
                    <button className="button" onClick={()=>this.showDetails()}>Calculate</button>
                </map>
                <aside>
                Rotterdam
                Score:
                </aside>
            </div>
        if(this.state.calculate){
            return(
            map +
            <p>{this.props.project.description}</p>
            )
        } else {
            return(
                map
            )
        }
    }
}