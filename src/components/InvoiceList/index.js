import React from 'react';
import './index.css';

function InvoiceListItem({ invoice }) {
    return (
        <tr className="invoice-table-row">
            <td>{invoice.invoiceNum}</td>
            <td>{`$${invoice.total}`}</td>
            <td>
                <button>Details</button>
            </td>
        </tr>
    )
}

function InvoiceList() {
    const list = [
        { "invoiceNum": "0001", "total": 0.00.toFixed(2), "id": 1 },
        { "invoiceNum": "0002", "total": 0.00.toFixed(2), "id": 2 },
        { "invoiceNum": "0003", "total": 0.00.toFixed(2), "id": 3 }
    ]
    return (
        <div className="invoice-list">
            <button>New Invoice</button>
            <div>
                <table>
                    <thead className="invoice-table-header">
                        <tr>
                            <th colSpan="1">Invoice #</th>
                            <th colSpan="1">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(invoice =>
                            <InvoiceListItem invoice={invoice} key={invoice.id} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvoiceList;