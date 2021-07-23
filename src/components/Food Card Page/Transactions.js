import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { loading } from '../../redux/loading/selectors';
import { foodCardTxns } from '../../redux/foodCard/selectors';

function Transactions() {
    const isLoading = useSelector(loading);
    const data = useSelector(foodCardTxns);
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        amount: '',
        credit: false,
        _id: '',
    });

    if (isLoading) {
        return <h1>loading...</h1>;
    }

    function deleteTxn(txn) {
        const data = {
            _id: txn._id,
            amount: txn.amount,
        };
        axios
            .delete('foodcard/deletetxn/', { data: data })
            .then((res) => {
                console.log('DELETE TXN SUCCESS', res);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function getTxnDetails(id) {
        axios
            .get(`/foodcard/gettxnbyid/${id}`)
            .then((res) => {
                const newData = { ...res.data };
                newData['credit'] = false;
                setFormData(newData);
                console.log('GET TRANSACTION DETAILS - SUCCESS');
            })
            .catch((err) => console.error(err));
    }

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
            _id: formData._id,
        };
        axios
            .put('/foodcard/edittxn/', data)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4 font-weight-bold">Transactions</h1>
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
                                            data-target="#editTxnModal"
                                            data-toggle="modal"
                                            onClick={() =>
                                                getTxnDetails(txn._id)
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteTxn(txn)}
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
                id="editTxnModal"
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

export default Transactions;
