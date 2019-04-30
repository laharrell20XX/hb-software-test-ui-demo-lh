import React from 'react';
import './index.css';

function LineItemsList() {
    return (
        <div>
            <h1>Line Items</h1>
            <div className="list-items-list">
                <table>
                    <thead className="list-item-table-header">
                        <tr>
                            <th colSpan="1">Description</th>
                            <th colSpan="1">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="list-item-table-row">
                            <td>Lorem Ipsum</td>
                            <td>$12.34</td>
                            <td>
                                <button>Remove Item</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Add Item</button>
            </div>
            <button>Save Item</button>
        </div>
    )
}

export default LineItemsList