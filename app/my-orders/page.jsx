"use client";
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {
  const { currency } = useAppContext();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
};
