"use client";

import axios from "axios";
import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/products", {
        name,
        description,
        price: parseFloat(price),
        image,
      });

      if (res.status === 201) {
        setToast({
          show: true,
          message: "Product added successfully!",
          type: "success",
        });
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      }
    } catch (err) {
      setToast({
        show: true,
        message: "Error adding product.",
        type: "error",
      });
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
          Add New Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full rounded-lg"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full rounded-lg"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input input-bordered w-full rounded-lg"
          required
        />

        <button
          type="submit"
          className={`btn btn-primary w-full rounded-full flex items-center justify-center gap-2 ${
            loading ? "loading" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {/* Toast */}
      {toast.show && (
        <div
          className={`toast toast-top toast-end mt-6 ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          <div className="alert">
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
