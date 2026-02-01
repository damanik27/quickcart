"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect } from "react";

const OrderPlaced = () => {

    const { router } = useAppContext()

    useEffect(() => {
        setTimeout(() => {
            router.push('/my-orders')
    }, 5000)
  }, [])


return (
  <div className='h-screen flex flex-col justify-center items-center gap-5'>


