'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AddProduct = () => {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  };