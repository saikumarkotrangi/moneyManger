// Write your code here
import {Component} from 'react'
import './index.css'

export default class TransactionItem extends Component {
  render() {
    const {eachObject, deleteTransaction} = this.props
    const {title, amount, type, id} = eachObject

    this.onDeleteFunction = () => {
      deleteTransaction(id)
    }

    return (
      <li key={eachObject.id} className="transaction-item">
        <div className="items-container">
          <p className="column1">{title}</p>
          <p className="column2">RS {amount}</p>
          <p className="column3">{type}</p>
          <button
            data-testid="delete"
            onClick={this.onDeleteFunction}
            className={`button-style ${'column4'}`}
            type="button"
          >
            <img
              className="delete-image"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            />
          </button>
        </div>
      </li>
    )
  }
}
