import React, { useState, useEffect } from "react";
import allDatas from "../../store/Store";

const Products = () => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const { loading, datas, getDatas } = allDatas();

  const toggleDropdownFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const toggleDropdownSorting = () => {
    setIsOpenSorting(!isOpenSorting);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const filterProducts = (product: any) => {
    if (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedPriceRange.length ||
        (selectedPriceRange.includes("0 - 100") && product.price <= 100) ||
        (selectedPriceRange.includes("101 - 250") &&
          product.price > 100 &&
          product.price <= 250) ||
        (selectedPriceRange.includes("250 +") && product.price > 250))
    ) {
      return true;
    }
    return false;
  };

  const sortedDatas = datas.slice().sort((a, b) => {
    // Customize your sorting logic here
    // For example, sorting by price
    return a.price - b.price;
  });

  return (
    <div>
      {/* Dropdowns in phone */}
      <div className="flex justify-between">
        {/* Category dropdown */}
        <div className="sm:hidden">
          <div>
            <select
              name="category"
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All</option>
              <option value="furniture">Furniture</option>
              <option value="homeware">Homeware</option>
              <option value="sofas">Sofas</option>
              <option value="lightFittings">Light fittings</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>
        {/* Price range dropdown */}
        <div className="sm:hidden">
          {/* Implement price range dropdown similar to category dropdown */}
        </div>
      </div>

      {/* Product list */}
      <div className="sm:flex container mx-auto lg:pl-[80px] sm:pl-[20px] pl-[10px] sm:pr-[20px] pr-[10px] pt-[48px]">
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center py-[20px] sm:py-[34px] gap-3 sm:gap-5">
            {/* Render filtered and sorted products */}
            {sortedDatas
              .filter(filterProducts)
              .map((product: any, index: number) => (
                <div
                  key={index}
                  className="hover:bg-slate-200 w-[300px] p-[10px] rounded-lg"
                >
                  {/* Render product details */}
                  <img
                    className="h-[200px] w-[300px] rounded-md"
                    src={product.image}
                    alt="Product"
                  />
                  <p className="mb-[8px] lg:mt-[10px] lg:mb-[15px]">
                    {product.name}
                  </p>
                  <p className="mb-[8px] lg:mt-[10px] lg:mb-[15px]">
                    {product.category}
                  </p>
                  <p>£{product.price}</p>
                </div>
              ))}
          </div>
          <div className="w-full flex justify-center mt-[32px] lg:mt-[42px]">
            <button className="w-[342px] ld:w-[170px] h-[56px] bg-[#F9F9F9]">
              View collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
