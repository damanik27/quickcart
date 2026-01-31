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
            <form className="w-full">
              <p className="text-2xl md:text-3xl text-gray-500">
                  Add Shipping <span className="font-semibold text-orange-600">Address</span>
              </p>
              <div className="space-y-3 max-w-sm mt-10">
                <input
                    className="px-2 py-2.5 border border-gray-500/30 rounded outline-none w-full text-gray-500"
                    type="text"
                    placeholder="Full name"
                />

              </div>

            </form>
          </div>
          <Footer />
      </>
  );


export default AddAddress;
