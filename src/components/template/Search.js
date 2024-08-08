"use client";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import coffeedata from "../../../data/coffeedata";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(setTimeout(() => {
      if (term.trim() === "") {
        setFilteredProducts([]);
      } else {
        const filtered = coffeedata.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredProducts(filtered.sort((a, b) => a.name.localeCompare(b.name)));
      }
    }, 500)); // Delay for 500ms
  };

  useEffect(() => {
    // Clean up timeout on component unmount
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  return (
    <Box display="flex" alignItems="center" sx={{ flexGrow: 1, flexDirection: "column" }}>
      <TextField
        variant="outlined"
        placeholder="جستجو..."
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ bgcolor: "#FEFAF6", borderRadius: 1, mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#102C57" }} />
            </InputAdornment>
          ),
        }}
      />

      {filteredProducts.length > 0 && (
        <List>
          {filteredProducts.map((product) => (
            <Link href={`/buy-resedential/${product.id}`} key={product.id} passHref>
              <ListItem button component="a">
                <ListItemText primary={product.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </Box>
  );
}

export default Search;
