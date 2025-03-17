import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Filters = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  /**
   * Updates the URL with the search query parameter
   */

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    router.push(`/?${params.toString()}`);
  };

  return (
    <>
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </>
  );
};

export default Filters;
