import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
export default class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onTitleChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmountChange = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onTypeChange = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  submitDetailsToList = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state

    const moneyType = transactionTypeOptions.find(
      eachObject => eachObject.optionId === optionId,
    )
    const {displayText} = moneyType
    const historyItem = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, historyItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(
      eachObject => eachObject.id !== id,
    )

    this.setState({
      transactionsList: filteredList,
    })
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0

    transactionsList.forEach(eachObject => {
      if (eachObject.type === transactionTypeOptions[0].displayText) {
        income += eachObject.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenses = 0
    transactionsList.forEach(eachObject => {
      if (eachObject.type === transactionTypeOptions[1].displayText) {
        expenses += eachObject.amount
      }
    })
    return expenses
  }

  getBalance = () => {
    const {transactionsList} = this.state

    let balance = 0
    let income = 0
    let expenses = 0

    transactionsList.forEach(eachObject => {
      if (eachObject.type === transactionTypeOptions[0].displayText) {
        income += eachObject.amount
      } else {
        expenses += eachObject.amount
      }
    })

    balance += income - expenses
    return balance
  }

  render() {
    const {transactionsList, titleInput, amountInput, optionId} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <>
        <div className="bg-container">
          <div className="money-manager-container">
            <div className="name-container">
              <h1>Hi,Richard</h1>
              <p>Welcome back to your</p>
              <p>Money Manager</p>
            </div>

            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />

            <div className="transaction-and-history-container">
              <div className="transaction-container">
                <h1>Add Transaction</h1>
                <form onSubmit={this.submitDetailsToList}>
                  <div className="input-container">
                    <label className="label" htmlFor="title">
                      TITLE
                    </label>
                    <input
                      value={titleInput}
                      onChange={this.onTitleChange}
                      className="input-element"
                      id="title"
                      type="text"
                      placeholder="TITLE"
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="amount">
                      AMOUNT
                    </label>
                    <input
                      value={amountInput}
                      onChange={this.onAmountChange}
                      className="input-element"
                      id="amount"
                      type="text"
                      placeholder="AMOUNT"
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="selector">
                      TYPE
                    </label>
                    <select
                      value={optionId}
                      onChange={this.onTypeChange}
                      className="input-element"
                      id="selector"
                    >
                      {transactionTypeOptions.map(eachObject => (
                        <option
                          key={eachObject.optionId}
                          className="select-element"
                          value={eachObject.optionId}
                        >
                          {eachObject.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="submit-button" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="history-container">
                <h1>History</h1>
                <div className="table-container">
                  <p className="column">Title</p>
                  <p className="column">Amount</p>
                  <p className="last-column">Type</p>
                </div>
                <ul className="unordered-list-container">
                  {transactionsList.map(eachObject => (
                    <TransactionItem
                      eachObject={eachObject}
                      key={eachObject.id}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
