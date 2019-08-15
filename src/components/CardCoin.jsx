import React, {Component} from 'react'
import './CardCoin.css'

export default class CardCoin extends Component{


    constructor(props){
        super(props);

        this.state={
                valorBrl: "",
                valorUsd: "0"
            }

        this.convert = this.convert.bind(this);
        }


convert() {
    const dolar = 4.05;
    let valorConvertido = (this.state.valorBrl * dolar) .toFixed(2)   
    console.log(valorConvertido)
    this.setState({valorUsd: valorConvertido })    
}

    render(){
    return(
        <div className="cardBoard">
                <h1>BRL to USD</h1>
                <div className="resultBox">
                    <h2>R$</h2>
                    <input onChange={(event)=> this.setState({valorBrl: event.target.value})} type="text" placeholder="Digite um valor..."/>
                    <button onClick={this.convert}>Convert</button>
                    <h2>US</h2>
                    <h2>{this.state.valorUsd}</h2>

            </div>
        </div>
    );
    }
}