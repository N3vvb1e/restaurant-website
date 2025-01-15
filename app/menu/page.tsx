"use client";

import { useState } from "react";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Salată românească de vară cu roșii și castraveți",
    category: "appetizers",
    price: 4.0,
    image: "/appetizer1.jpg?height=200&width=200",
  },
  {
    id: 2,
    name: "Tocăniță de porc cu mămăliguță",
    category: "main",
    price: 7.25,
    image: "/main-dish1.jpg?height=200&width=200",
  },
  {
    id: 3,
    name: "Ciorbă 'Casa Românească' cu afumătură",
    category: "main",
    price: 3.5,
    image: "/soup2.jpg?height=200&width=200",
  },
  {
    id: 4,
    name: "Ciorbă de văcuță",
    category: "main",
    price: 3.25,
    image: "/soup1.jpg?height=200&width=200",
  },
  {
    id: 5,
    name: "Șnițel de pui/porc cu cartofi prăjiți",
    category: "main",
    price: 5.5,
    image: "/main-dish2.jpg?height=200&width=200",
  },
  {
    id: 6,
    name: "Clătite cu dulceață",
    category: "desserts",
    price: 3.0,
    image: "/dessert1.jpg?height=200&width=200",
  },
  {
    id: 7,
    name: "Papanași cu dulceață și smântână",
    category: "desserts",
    price: 5.0,
    image: "/dessert2.jpg?height=200&width=200",
  },
  {
    id: 8,
    name: "Pepsi 0.5L",
    category: "drinks",
    price: 2.45,
    image: "/drink1.jpg?height=200&width=200",
  },
  {
    id: 9,
    name: "Heineken 0% Alc 0.33L",
    category: "drinks",
    price: 2.65,
    image: "/drink2.jpg?height=200&width=200",
  },
];

const categories = ["all", "appetizers", "main", "desserts", "drinks"];

export default function Menu() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meniul nostru</h1>

      <div className="mb-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg ${
              filter === category ? "bg-amber-600 text-white" : "bg-amber-200"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.category}</p>
            <p className="text-amber-600 font-bold">€{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
