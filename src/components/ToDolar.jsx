import React, {Component} from 'react'
import './ToDolar.css'


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
    const dolar = 4.00;
    let valorConvertido = (this.state.valorBrl / dolar) .toFixed(2)   
    console.log(valorConvertido)
    this.setState({valorUsd: valorConvertido })    
}

    render(){
    return(
        <div className="cardBoard container-fluid mt-4">
            <div className="row  titleBar">
                <div className="row">
                    <h1 className="col-12 titleConvert">BRL to USD</h1>
                </div>
                <div className="row mt-2 inputArea">
                    <h2 className="col-2 ml-2 mr-2">BRL</h2>
                    <input className=" ml-2 col-4" type="text"
                        placeholder="0,00" onChange={(e)=> this.setState({valorBrl: e.target.value})}/>
                    <button className="ml-2 col-3" onClick={this.convert}>Convert</button>
               </div>
               <div className="row ml-2 resultArea">
                    <h2 className="col-2">= </h2>
                    <h2 className="col-6">{this.state.valorUsd}</h2>
               </div>
            </div>
        </div>
    );
    }
}