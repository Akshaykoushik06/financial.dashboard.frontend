import React from 'react';
import { Link } from 'react-router-dom';

// import BankAcc from '../../Bank Acc Page/BankAcc';
import InfoIcon from '../../../icons/Info';

function BankAccounts() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2">
                <Link to='/bankacc'>
                    <div className="col mb-4">
                        <div className="card text-center">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title text-dark">ICICI Bank</h5>
                                <p className="card-text text-dark">&#8377; 2,500.00</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/bankacc'>
                    <div className="col mb-4">
                        <div className="card text-center bg-success text-white">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">HDFC Bank</h5>
                                <p className="card-text">&#8377; 2,500.00</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/bankacc'>
                    <div className="col mb-4">
                        <div className="card text-center">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title text-dark">Canara Bank</h5>
                                <p className="card-text text-dark">&#8377; 2,500.00</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/bankacc'>
                    <div className="col mb-4">
                        <div className="card text-center">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title text-dark">Indian Overseas Bank</h5>
                                <p className="card-text text-dark">&#8377; 2,500.00</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <div className="badge badge-pill badge-primary"><InfoIcon /> Click on each card for more information</div> */}
        </div>
    )
}

export default BankAccounts;