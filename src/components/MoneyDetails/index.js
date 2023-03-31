// Write your code here
import {Component} from 'react'
import './index.css'

export default class MoneyDetails extends Component {
  render() {
    const {balanceAmount, incomeAmount, expensesAmount} = this.props

    return (
      <div className="money-details-container">
        <div className={`money-detail-container ${'your-balance'}`}>
          <img
            className="money-image"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <div>
            <p className="text">Your Balance</p>
            <p data-testid="balanceAmount" className="RPS">
              RS {balanceAmount}
            </p>
          </div>
        </div>
        <div className={`money-detail-container ${'your-income'}`}>
          <img
            className="money-image"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div>
            <p className="text">Your Income</p>
            <p data-testid="incomeAmount" className="RPS">
              RS {incomeAmount}
            </p>
          </div>
        </div>
        <div className={`money-detail-container ${'your-expenses'}`}>
          <img
            className="money-image"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <div>
            <p className="text">Your Expenses</p>
            <p data-testid="expensesAmount" className="RPS">
              RS {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
