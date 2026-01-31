"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = async (e) => {
          e.preventDefault();
};

  return (
      <>
          <Navbar />
          <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
          </div>
          <Footer />
      </>
  );


export default AddAddress;
