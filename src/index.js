import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Budget from "./components/Budget";
import Depenses from "./components/Depenses";
import Layout from "./components/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: parseInt(0, 10),
      txtBudgetValue: "",
      addable: false,
      depenses: [
        {
          desc: "j'ai acheté ça",
          montant: "100€",
        },
        {
          desc: "j'ai acheté ça",
          montant: "100€",
        },
      ],
      menuDepenseOuvert : false,
      descNew : '',
      montantNew : '',
    };
  }

  onBudgetChange(value) {
    if (isNaN(parseInt(value, 10))) {
      this.setState({
        addable: false,
      });
    } else {
      this.setState({
        addable: true,
      });
    }
    this.setState({
      txtBudgetValue: parseInt(value, 10),
    });
  }

  onClickBudget(i) {
    if (i === "add") {
      let plusBudg = this.state.txtBudgetValue;
      if (!isNaN(plusBudg)) {
        let newBudg = parseInt(this.state.budget, 10) + parseInt(plusBudg, 10);
        this.setState({
          budget: newBudg,
        });
      }
    }

    if (i === "reset") {
      let newBudg = parseInt(0, 10);
      this.setState({
        budget: newBudg,
      });
    }
  }

  handleClickDepens() {
    this.setState({
      menuDepenseOuvert : !this.state.menuDepenseOuvert
    })
  }
 handleDepenseChange(desc){
  this.setState({
    descNew : desc
  })
 }
 
handleMontantChange(montant){
  if(!isNaN(montant)){
    this.setState({
      montantNew : montant
    })
  }else{
    this.setState({
      montantNew : ''
    })
  }
}

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Budget
                    addable={this.state.addable}
                    onClick={(i) => {
                      this.onClickBudget(i);
                    }}
                    onChange={(e) => {
                      this.onBudgetChange(e);
                    }}
                    value={this.state.budget + "€"}
                  />
                }
              />
              <Route
                path="/depenses"
                element={
                  <Depenses
                    value={this.state.budget + "€"}
                    depenses={this.state.depenses}
                    onClick={() => {this.handleClickDepens()}}
                    menuOuvert={this.state.menuDepenseOuvert}
                    onChangeDesc={(desc) => {this.handleDepenseChange(desc)}}
                    onChangeMontant={(montant) => {this.handleMontantChange(montant)}}
                  />
                }
              />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
