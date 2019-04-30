import React from 'react';
import './index.css';

function LineItem({ lineItem }) {
    return (
        <tr className="list-item-table-row">
            <td>{lineItem.description}</td>
            <td>{`$${lineItem.amount.toFixed(2)}`}</td>
            <td>
                <button>Remove Item</button>
            </td>
        </tr>
    )
}

function LineItemsList(props) {
    const { id } = props.match.params

    const lineItems = [
        { "description": "Lorem Ipsum", "amount": 12.34, "invoiceId": 1 },
        { "description": "Solor Amet", "amount": 5.00, "invoiceId": 1 },
        { "description": "Lorem Ipsum", "amount": 12.34, "invoiceId": 2 },
        { "description": "Tempor Incididunt", "amount": 0.00, "invoiceId": 2 },
        { "description": "Lorem Ipsum", "amount": 12.34, "invoiceId": 3 },
        { "description": "Ad Minim", "amount": 43.45, "invoiceId": 3 },
    ]

    const filteredLineItems = lineItems.filter(lineItem => lineItem.invoiceId === Number(id))

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
                        {filteredLineItems.map((lineItem, i) =>
                            <LineItem lineItem={lineItem} key={i} />
                        )}
                    </tbody>
                </table>
                <button>Add Item</button>
            </div>
            <button>Save Item</button>
        </div>
    )
}

export default LineItemsList