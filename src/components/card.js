import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className="col" >
                <div className="card my-3" style={{ width: '18rem', textAlign: 'center' }}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
                        Viaggia
                        <span className='badge'>{this.props.card.number}</span>
                    </button>
                    <img src={this.props.card.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.cardTitle}</h5>
                        <p className="card-text">{this.props.card.cardText + this.props.card.id}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-danger">cancella</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;