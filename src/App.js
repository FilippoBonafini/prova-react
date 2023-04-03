import React, { Component } from "react";

// IMPORTO I VARI COMPONENTI 
import Navbar from "./components/navbar";
import Card from "./components/card";
// IMPORTO L'IMMAGINE DEL LOGO 
import logo from './logo.svg'

class App extends Component {
  // MI CREO DEI DATI 
  state = {
    cards: [
      { id: 0, cardTitle: 'spagna', cardText: 'questo è il testo della card ', img: logo, number: 0 },
      { id: 1, cardTitle: 'messico', cardText: 'questo è il testo della card ', img: logo, number: 0 },
      { id: 2, cardTitle: 'cuba', cardText: 'questo è il testo della card ', img: logo, number: 0 },
      { id: 3, cardTitle: 'portogallo', cardText: 'questo è il testo della card ', img: logo, number: 0 },
      { id: 4, cardTitle: 'bahamas', cardText: 'questo è il testo della card ', img: logo, number: 0 },
      { id: 5, cardTitle: 'bermuda', cardText: 'questo è il testo della card ', img: logo, number: 0 },
    ]
  }
  // CREO UNA FUNZIONE CHE CANCELLA QUALCOSA DALL'ARRAY DI PARTENZA 
  delete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    // AGGIORNO LO STATO 
    this.setState({ cards });
  }
  // CREO UNA FUNZIONE CHE INCREMENTI IL NUMERO CONTENUTO NEI DATI 
  increment = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].number++;
    // AGGIORNO LO STATO 
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Prova Prova Prova</h1>
          <div className="row">
            {/* FACCIO RIPETERE UN OPERAZIONE PER OGNI CARD NELL'ARRAY  */}
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.delete}
                onIncrement={this.increment}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }

}

export default App;
