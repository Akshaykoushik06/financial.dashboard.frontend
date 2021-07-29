import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { bankName } from '../../redux/bankAccounts/selectors';

function Buttons() {
    const bank = useSelector(bankName);
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        amount: '',
        credit: false,
    });
    function handleSave(e) {
        let newData = { ...formData };
        newData[e.target.id] =
            e.target.id === 'credit' ? e.target.checked : e.target.value;
        setFormData(newData);
    }
    function postData(e) {
        e.preventDefault();
        const data = {
            date: formData.date,
            description: formData.description,
            amount: formData.amount,
            credit: formData.credit,
        };
        axios
            .post(`/bankacc/createtxn/${bank}`, data)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <div className="text-right">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addTxnModal"
                >
                    Add a transaction
                </button>
            </div>
            <div
                className="modal fade"
                id="addTxnModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Transaction
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={(e) => postData(e)}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="date">Date</label>
                                    <input
                                        onChange={(e) => handleSave(e)}
                                        value={formData.date}
                                        id="date"
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="description">Description</label>
                                    <input
                                        onChange={(e) => handleSave(e)}
                                        value={formData.description}
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        placeholder="Where did you spend?"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="amount">Amount</label>
                                    <input
                                        onChange={(e) => handleSave(e)}
                                        value={formData.amount}
                                        type="text"
                                        className="form-control"
                                        id="amount"
                                        placeholder="How much?"
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        onChange={(e) => handleSave(e)}
                                        value={formData.credit}
                                        type="checkbox"
                                        className="form-check-input"
                                        id="credit"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="credit"
                                    >
                                        Credit
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
