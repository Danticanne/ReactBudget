import React from "react";

class Depense extends React.Component{
    render(){
        return(
            <div className="depense">
                <p>{this.props.desc}</p>
                <p>{this.props.montant}</p>
            </div>
        )
    }
}


export default Depense