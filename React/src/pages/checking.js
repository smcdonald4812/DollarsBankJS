import React from 'react';
import {Table, Form, Button} from 'react-bootstrap';
import TransactionService from '../services/transactionSevice.js';
import AccountService from '../services/accountService.js';

class Checking extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            transactions:[],
            account:[],
            account2:[],
            withdraw:0.0,
            deposit:0.0,
            transfer:0.0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
    }
    componentDidMount() {
        TransactionService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ transactions: response.data});
        });
        AccountService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ account: response.data});
        });
        AccountService.get(this.props.user.id, 'SAVINGS').then((response) => {
            this.setState({ account2: response.data});
        });
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        let start = this.state.account.amount;
        let a = this.state.withdraw;
        let end = start-a;
        let newAcc = this.state.account;
        newAcc.amount = end;
        this.setState({account:newAcc});
        let trans = {customerTransactionId:this.props.user.id, accountTransactionId:this.state.account.id, amount:a, startAmount:start, endAmount:end};
        TransactionService.create(trans);
        AccountService.update(this.state.account);
        TransactionService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ transactions: response.data});
        });
        AccountService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ account: response.data});
        });
        event.stopPropigation();
    }
    handleDeposit(event) {
        event.preventDefault();
        let start = this.state.account.amount;
        let a = this.state.deposit;
        let end = start+a;
        let newAcc = this.state.account;
        newAcc.amount = end;
        this.setState({account:newAcc});
        let trans = {customerTransactionId:this.props.user.id, accountTransactionId:this.state.account.id, amount:a, startAmount:start, endAmount:end};
        TransactionService.create(trans);
        AccountService.update(this.state.account);
        TransactionService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ transactions: response.data});
        });
        AccountService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ account: response.data});
        });
        event.stopPropigation();
    }
    handleTransfer(event) {
        event.preventDefault();
        let start = this.state.account.amount;
        let a = this.state.transfer;
        let end = start-a;
        let newAcc = this.state.account;
        newAcc.amount = end;
        this.setState({account:newAcc});
        let start2 = this.state.account2.amount;
        let a2 = this.state.transfer;
        let end2 = start2+a2;
        let newAcc2 = this.state.account2;
        newAcc2.amount = end2;
        this.setState({account2:newAcc2});
        let trans = {customerTransactionId:this.props.user.id, accountTransactionId:this.state.account.id, amount:a, startAmount:start, endAmount:end};
        let trans2 = {customerTransactionId:this.props.user.id, accountTransactionId:this.state.account2.id, amount:a2, startAmount:start2, endAmount:end2};
        TransactionService.create(trans);
        TransactionService.create(trans2);
        AccountService.update(this.state.account);
        AccountService.update(this.state.account2);
        TransactionService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ transactions: response.data});
        });
        AccountService.get(this.props.user.id, 'CHECKING').then((response) => {
            this.setState({ account: response.data});
        });
        AccountService.get(this.props.user.id, 'SAVINGS').then((response) => {
            this.setState({ account2: response.data});
        });
        event.stopPropigation();
    }
    render() {
        let list = []
        for(let i = 0; i < this.state.transactions.length; i++) {
            list.push(
                <tr key={this.state.transactions[i].id}>
                    <td>{this.state.transactions[i].datecreated}</td>
                    <td>{this.state.transactions[i].startamount}</td>
                    <td>{this.state.transactions[i].amount}</td>
                    <td>{this.state.transactions[i].endamount}</td>
                </tr>
            );
        }
        return (
            <div className="container mr-auto" style={{ marginTop: "100px"}}>
                <Form onSubmit={this.handleSubmit}>
                    <Table striped bordered hover borderless>
                        <tbody>
                            <tr><td>{this.props.user.firstname}'s</td><td>Checking Account</td><td>Account Number</td><td>{this.state.account.id}</td></tr>
                            <tr><td><input type="number" step="0.01" name="withdraw" className="form-control" max={this.state.account.amount} min="0" value={this.state.withdraw} placeholder="0.00" onChange={this.handleChange}/></td><td><Button className="btn btn-primary btn-block" name="withdraw" type="submit">Withdraw</Button></td>
                            <td><input type="number" step="0.01" name="deposit" className="form-control" min="0" value={this.state.deposit} placeholder="0.00" onChange={this.handleChange}/></td><td><Button className="btn btn-primary btn-block" name="deposit" onClick={this.handleDeposit}>Deposit</Button></td></tr>
                            <tr><td><input type="number" step="0.01" name="transfer" className="form-control" max={this.state.account.amount} min="0" value={this.state.transfer} placeholder="0.00" onChange={this.handleChange}/></td><td><Button className="btn btn-primary btn-block" name="transfer" onClick={this.handleTransfer}>Transfer</Button></td><td></td><td></td></tr>
                            <tr><td>Date</td><td>Start</td><td>Amount</td><td>End</td></tr>
                            {list}
                        </tbody>
                    </Table>
                </Form>
            </div>
        );
    }
}

export default Checking;