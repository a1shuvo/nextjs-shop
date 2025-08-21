"use client";

import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3`}
            >
              <AiOutlineCheckCircle className="w-6 h-6" />
              <span>Product added successfully!</span>
            </div>
          ),
          { duration: 3000 }
        );

        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      }
    } catch (err) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3`}
          >
            <AiOutlineCloseCircle className="w-6 h-6" />
            <span>Error adding product.</span>
          </div>
        ),
        { duration: 3000 }
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-12 relative">
      <Toaster position="top-right" reverseOrder={false} />

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
          className="btn btn-primary w-full rounded-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
