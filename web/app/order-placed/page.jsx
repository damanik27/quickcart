"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect } from "react";

const OrderPlaced = () => {

    const { router } = useAppContext()

    useEffect(() => {
