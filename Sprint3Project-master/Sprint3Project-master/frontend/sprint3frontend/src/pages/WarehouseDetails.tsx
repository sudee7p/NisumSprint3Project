import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, User, Phone, Mail, Package, Calendar } from 'lucide-react';

interface WarehouseDetails {
  warehouseId: number;
  warehouseName: string;
  location: string;
  managerName: string;
  phoneNumber: string;
  email: string;
  capacity: number;
  createdDate: string;
}

const WarehouseDetails: React.FC = () => {
  const { warehouseId } = useParams<{ warehouseId: string }>();
  const [warehouseDetails, setWarehouseDetails] = useState<WarehouseDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - using your actual database structure
    setTimeout(() => {
      if (warehouseId === "101") {
        setWarehouseDetails({
          warehouseId: 101,
          warehouseName: "Warehouse - Bangalore North",
          location: "Peenya Industrial Area, Bangalore",
          managerName: "Vikram Rao",
          phoneNumber: "9812345678",
          email: "vikram.rao@warehouse.com",
          capacity: 100000,
          createdDate: "2025-01-01"
        });
      } else if (warehouseId === "102") {
        setWarehouseDetails({
          warehouseId: 102,
          warehouseName: "Warehouse - Delhi NCR",
          location: "Okhla Industrial Estate, Delhi",
          managerName: "Neha Gupta",
          phoneNumber: "9823456789",
          email: "neha.gupta@warehouse.com",
          capacity: 80000,
          createdDate: "2025-02-01"
        });
      }
      setLoading(false);
    }, 1000);
  }, [warehouseId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!warehouseDetails) {
    return (
      <div className="max-w-4xl mx-auto">
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
          <div className="p-6 text-center">
            <Building2 className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <h1 className="text-xl font-bold text-slate-800 mb-2">Warehouse Not Found</h1>
            <p className="text-slate-600">No warehouse details available for ID #{warehouseId}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Orders</span>
        </Link>
      </div>

      {/* Warehouse Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6 text-white">
        <div className="p-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Building2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{warehouseDetails.warehouseName}</h1>
              <p className="text-blue-100 text-lg">Warehouse ID: #{warehouseDetails.warehouseId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warehouse Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Location & Contact Info */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Location & Contact</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-600 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-600">Address</p>
                  <p className="font-semibold text-slate-800">{warehouseDetails.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Manager</p>
                  <p className="font-semibold text-slate-800">{warehouseDetails.managerName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Phone</p>
                  <p className="font-semibold text-slate-800">{warehouseDetails.phoneNumber}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="font-semibold text-slate-800">{warehouseDetails.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouse Stats */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
              <Package className="h-5 w-5 text-blue-600" />
              <span>Warehouse Information</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Storage Capacity</p>
                  <p className="font-semibold text-slate-800">{warehouseDetails.capacity.toLocaleString()} units</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Established</p>
                  <p className="font-semibold text-slate-800">
                    {new Date(warehouseDetails.createdDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Status</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">About This Warehouse</h2>
          <div className="prose text-slate-600">
            <p>
              This warehouse facility serves as a key distribution center in the region, 
              handling order fulfillment and inventory management for multiple sellers. 
              The facility is equipped with modern storage systems and managed by experienced 
              logistics professionals to ensure efficient order processing and timely deliveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails;