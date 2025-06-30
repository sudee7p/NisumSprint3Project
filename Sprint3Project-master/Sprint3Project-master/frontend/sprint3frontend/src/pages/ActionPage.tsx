import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, MessageSquare, Star, ShoppingCart, Package } from 'lucide-react';
import TrackingModal from '../components/TrackingModal';
import RatingModal from '../components/RatingModal';
import PurchaseModal from '../components/PurchaseModal';

const ActionPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [ratingType, setRatingType] = useState<string>('');
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  const handleRatingSubmit = (rating: number, type: string) => {
    alert(`${rating} star rating submitted for ${type}!`);
    setRatingModalOpen(false);
  };

  const openRatingModal = (type: string) => {
    setRatingType(type);
    setRatingModalOpen(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Orders</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-slate-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">Order Actions</h1>
          </div>
          
          <p className="text-slate-600 mb-8">Order #{orderId}</p>

          <div className="grid gap-4">
            <button
              onClick={() => setTrackingModalOpen(true)}
              className="w-full flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Track Package</h3>
                <p className="text-sm text-slate-600">View current shipment status and location</p>
              </div>
            </button>

            <button
              onClick={() => openRatingModal('Seller Feedback')}
              className="w-full flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-shrink-0">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Leave Seller Feedback</h3>
                <p className="text-sm text-slate-600">Rate your experience with the seller</p>
              </div>
            </button>

            <button
              onClick={() => openRatingModal('Delivery Feedback')}
              className="w-full flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-shrink-0">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Leave Delivery Feedback</h3>
                <p className="text-sm text-slate-600">Rate the delivery service</p>
              </div>
            </button>

            <button
              onClick={() => openRatingModal('Product Review')}
              className="w-full flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-shrink-0">
                <Star className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Write Product Review</h3>
                <p className="text-sm text-slate-600">Share your experience with the product</p>
              </div>
            </button>

            <button
              onClick={() => setPurchaseModalOpen(true)}
              className="w-full flex items-center space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex-shrink-0">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Buy It Again</h3>
                <p className="text-sm text-slate-600">Reorder the same items</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TrackingModal
        isOpen={trackingModalOpen}
        onClose={() => setTrackingModalOpen(false)}
        orderId={orderId!}
      />

      <RatingModal
        isOpen={ratingModalOpen}
        onClose={() => setRatingModalOpen(false)}
        type={ratingType}
        onSubmit={handleRatingSubmit}
      />

      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
        orderId={orderId!}
      />
    </div>
  );
};

export default ActionPage;