import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { loading } from '../../redux/loading/selectors';
import { unbilledTxns } from '../../redux/creditCard/selectors';

function UnbilledTransactions() {
    const isLoading = useSelector(loading);
    const data = useSelector(unbilledTxns);
    const [formData, setFormData] = useState({
        amount: '',
        date: '',
        description: '',
        type_of_txn: 'debit',
        _id: '',
    });

    if (isLoading) {
        return <h1>loading...</h1>;
    }

    function deleteTxn(id) {
        const data = {
            _id: id,
        };
        console.log('delete txn called');
        axios
            .delete('/creditcard/deletetxn/', { data: data })
            .then((res) => {
                console.log('DELETE TXN SUCCESS', res);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function getTxnDetails(id) {
        const txn = data.find((item) => item._id === id);
        setFormData(txn);
    }

    function handleSave(e) {
        let newData = { ...formData };
        newData[e.target.id] = e.target.value;
        setFormData(newData);
    }
    function postData(e) {
        e.preventDefault();
        const data = {
            _id: formData._id,
            amount: formData.amount,
            date: formData.date,
            description: formData.description,
            billPaid: formData.billPaid,
            type_of_txn: formData.type_of_txn,
        };
        axios
            .put('/creditcard/edittxn/', data)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    }

    function returnNote() {
        // const note = formData.credit ? 'credit' : 'debit';
        return (
            <div className="text-muted">
                Note: This was a {formData.type_of_txn} transaction.
            </div>
        );
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4 font-weight-bold">
                        Unbilled Transactions
                    </h1>
                    <hr className="my-4" />
                </div>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((txn, index) => (
                            <tr key={txn._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{txn.date}</td>
                                <td>{txn.description}</td>
                                <td>{txn.amount}</td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-secondary badge-pill"
                                            data-target="#editTxnModal2"
                                            data-toggle="modal"
                                            onClick={() =>
                                                getTxnDetails(txn._id)
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteTxn(txn._id)}
                                            type="button"
                                            className="btn btn-secondary badge-pill"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* modal for edit */}
            <div
                className="modal fade"
                id="editTxnModal2"
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
                                Edit Transaction
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
                                {returnNote()}
                                <hr />
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

export default UnbilledTransactions;
