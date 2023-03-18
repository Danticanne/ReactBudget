import React from "react";

class Budget extends React.Component {
  render() {
    let classNames;
    let view;
    if (this.props.addable) {
      classNames = "addBudget bouton enabled";
      view = 'hidden'
    } else {
      classNames = "addBudget bouton notEnabled";
      view = 'show'
    }
    return (
      <div className="container">
        <p className="valueBudget">{this.props.value}</p>
        <button
          className={classNames}
          onClick={() => {
            this.props.onClick("add");
          }}
        >
          Ajouter un montant
        </button>
        <input
          placeholder="Montant à ajouter"
          onChange={(e) => {
            this.props.onChange(e.target.value);
          }}
        ></input>
        <p className={view}>Ce n'est pas un montant</p>
        <button
          className="resetBudget bouton"
          onClick={() => {
            this.props.onClick("reset");
          }}
        >
          Remmettre à zéro
        </button>
      </div>
    );
  }
}

export default Budget;
