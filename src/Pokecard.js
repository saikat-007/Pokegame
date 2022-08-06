import React, {Component} from "react";
import "./Pokecard.css";
let img_src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
function getId(num){
    return (num <= 99 ? `00${num}`.slice(-3) : num)
}

class Pokecard extends Component{
    render(){
        var img_url = `${img_src}${getId(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-img"><img src={img_url}></img></div>
                <div className="Pokecard-data">Type : {this.props.type}</div>
                <div className="Pokecard-data">Exp : {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;