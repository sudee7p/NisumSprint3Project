import React from 'react';
import { Receipt, Download, Calendar, CreditCard, DollarSign } from 'lucide-react';

interface Invoice {
  invoiceNo: string;
  date: string;
  paymentMode: string;
  totalAmount: number;
}

interface InvoiceDetailsProps {
  invoice: Invoice;
  onDownload: () => void;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoice, onDownload }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Receipt className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Invoice Details</h2>
          </div>
          <button
            onClick={onDownload}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Download className="h-4 w-4" />
            <span>Download Invoice</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Receipt className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Invoice Number</p>
                <p className="font-semibold text-slate-800">{invoice.invoiceNo}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Invoice Date</p>
                <p className="font-semibold text-slate-800">
                  {new Date(invoice.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Payment Mode</p>
                <p className="font-semibold text-slate-800">{invoice.paymentMode}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Total Amount</p>
                <p className="font-semibold text-green-600 text-lg">
                  ₹{invoice.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;