"use client"
import { useState } from "react";

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the search logic here (e.g., redirect or fetch data)
    console.log("Search Term:", searchTerm);
  };

  return (
    <div className="relative flex items-center">
      {/* Search Icon */}
      <button
        aria-label="Toggle Search"
        onClick={toggleSearch}
        className="text-left text-white font-bold  lg:text-black focus:outline-none"
      >
        {isSearchVisible ? (
          <i className="fa fa-close text-lg"></i>
        ) : (
          <i className="fa fa-search text-lg"></i>
        )}
      </button>

      {/* Search Form */}
      {isSearchVisible && (
        <form
          onSubmit={handleSearch}
          className="absolute top-full mt-2 w-72 bg-white shadow-lg p-4 rounded-lg"
        >
          <div className="flex items-center">
            <input
              type="text"
              name="s"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="Search Button"
              className="bg-gray-500 text-white px-4 py-2 rounded-r-lg hover:bg-gray-600 focus:outline-none"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {/* Example logic for showing search results */}
            {searchTerm ? (
              <div>
                <p>Search results for &quot;{searchTerm}&quot;</p>
                {/* Render search results dynamically */}
              </div>
            ) : (
              <p className="text-gray-400">Type something to search</p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}