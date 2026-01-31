"use client";
import React from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {
  const {
    products,
    router,
    cartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
  } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20"></div>
    </>
  );
};
