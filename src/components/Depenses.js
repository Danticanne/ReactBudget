
import React from "react";
import Depense from './depense'
class Depenses extends React.Component {
  render() {
    console.log(this.props.depenses)
    return (
      <div className="container">
        <p className="valueBudget">{this.props.value}</p>
        <button className="bouton" onClick={() => {this.props.onClick()}}>{this.props.menuOuvert?'cacher le menu':'ajouter une dépense'}</button>
        {this.props.menuOuvert?<div className="menu">
          <p>montant : </p>
          <input onChange={(e) => {this.props.onChangeMontant(e.target.value)}} style={{width : '40px'}}></input>
          <p>description : </p>
          <textarea onChange={(e) => {this.props.onChangeDesc(e.target.value)}}></textarea>
          <button className="bouton">ajouter une dépense</button>
        </div>:null}
        <div>
          {this.props.depenses.map((el, index) => {
            return(
              <Depense desc={el.desc} montant={el.montant} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Depenses;
