import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/Homepage/HomePage';
import BankAcc from './components/Bank Acc Page/BankAcc';
import CreditCardPage from './components/Credit Card Page/CreditCardPage';
import FoodCardPage from './components/Food Card Page/FoodCardPage';
import GoldPage from './components/Gold Page/GoldPage';
import LoansEMIsPage from './components/Loans-EMIs Page/LoansEMIsPage';
import MFsPage from './components/Mutual Funds Page/MFPage';
import PFsPage from './components/Provident Funds Page/PFPage';
import StocksPage from './components/Stocks Page/StocksPage';
import Navbar from './components/Shared/Navbar';

function Routes() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/bankacc" component={BankAcc} />
                    <Route path="/creditcard" component={CreditCardPage} />
                    <Route path="/foodcard" component={FoodCardPage} />
                    <Route path="/gold" component={GoldPage} />
                    <Route path="/loansemis" component={LoansEMIsPage} />
                    <Route path="/mutualfunds" component={MFsPage} />
                    <Route path="/pf" component={PFsPage} />
                    <Route path="/stocks" component={StocksPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
