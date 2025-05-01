import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AdminContext } from "../Context/AdminContext/AdminContext";
import { CommonApiUrl } from "../HttpCommon";

function OrderHistory() {
  const { user } = useContext(AdminContext); // Get user from context
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const res = await fetch(`${CommonApiUrl}/api/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setOrders((prev) => prev.filter((order) => order._id !== orderId));
      alert("Order deleted successfully.");
    } catch (err) {
      alert("Failed to delete order: " + err.message);
    }
  };

  useEffect(() => {
    if (!user) {
      setError("Please log in to view your orders.");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch(`${CommonApiUrl}/api/orders/${user._id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.message || "Error fetching orders.");
        } else {
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  console.log("====================================");
  console.log("orders", orders);
  console.log("====================================");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Your Order History</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="border-b-2 pb-4 mb-4">
              <div className="flex gap-2">
                {order &&
                  order.items &&
                  order.items?.map((item) => (
                    <img
                      src={item.productId?.main_img}
                      alt={item.productId?.name}
                      className="w-32 h-32 object-contain rounded-lg overflow-hidden border p-2"
                    />
                  ))}
              </div>

              <h3 className="text-xl font-medium">Order ID: {order._id}</h3>
              <button
                onClick={() => deleteOrder(order._id)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
              <p className="text-sm text-gray-600">
                Status: {order.paymentStatus}
              </p>
              <p className="text-sm text-gray-600">
                Total Amount: ₹{order.totalAmount}
              </p>
              <p className="text-sm text-gray-600">
                Placed on: {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <div className="mt-4">
                <h4 className="text-lg font-medium">Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>
                        {item.name} ({item.size})
                      </span>
                      <span>
                        ₹{item.price} x {item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;






