import React from 'react';
import { X, MapPin, Package, Truck, CheckCircle } from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose, orderId }) => {
  if (!isOpen) return null;

  const trackingSteps = [
    { status: 'Order Placed', date: '2024-01-15', completed: true, icon: Package },
    { status: 'Order Confirmed', date: '2024-01-15', completed: true, icon: CheckCircle },
    { status: 'Shipped', date: '2024-01-16', completed: true, icon: Truck },
    { status: 'In Transit', date: '2024-01-17', completed: true, icon: MapPin },
    { status: 'Out for Delivery', date: '2024-01-20', completed: false, icon: Truck },
    { status: 'Delivered', date: '', completed: false, icon: CheckCircle }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">Track Package</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <p className="text-slate-600 mb-6">Order #{orderId}</p>

          <div className="space-y-4">
            {trackingSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-100 border-green-500 text-green-600' 
                      : 'bg-slate-100 border-slate-300 text-slate-400'
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${step.completed ? 'text-slate-800' : 'text-slate-400'}`}>
                      {step.status}
                    </p>
                    {step.date && (
                      <p className="text-sm text-slate-600">{step.date}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Current Status:</strong> In Transit
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Your package is on its way to the delivery center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;