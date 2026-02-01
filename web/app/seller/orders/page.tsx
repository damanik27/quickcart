'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const Orders = () => {

    const { currency } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchSellerOrders();
    }, []);

    
    return (
    <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
         {loading ? <Loading /> : <div>Pesanan akan muncul di sini</div>}
        <Footer />
    </div>
);

   

