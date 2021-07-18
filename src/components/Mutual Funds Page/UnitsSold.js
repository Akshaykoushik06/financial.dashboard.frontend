import React, { useState } from 'react';

function UnitsSold() {
    const [data, setData] = useState([]);

    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
                <h1 class="display-4 font-weight-bold">Units sold</h1>
            </div>
            <hr className="my-4" />
            {data.length === 0 ? noDataPlaceholder() : data()}
        </div>
    );
}

function noDataPlaceholder() {
    return <h6 className="text-muted">Sell some units to see them here.</h6>;
}

function data() {
    return (
        <table class="table table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    );
}

export default UnitsSold;
