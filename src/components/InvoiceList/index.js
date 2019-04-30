import React from 'react';
import './index.css';

function InvoiceListItem() {
    return (
        <tr className="invoice-table-row">
            <td>0001</td>
            <td>$0.00</td>
            <td>
                <button>Details</button>
            </td>
        </tr>
    )
}

function InvoiceList() {

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
                        {/*props.list.map( invoice =>
                            <tr className = "invoice-table-row">
                                <InvoiceListItem invoice={invoice} key={invoice.id} />
                            </tr>
                        ) */}
                        <InvoiceListItem />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvoiceList;