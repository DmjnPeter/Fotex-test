export async function getArtists(searchTerm = "", page = 1) {
    try {
      const url = new URL("https://exam.api.fotex.net/api/artists");
      
      // URL parameters
      url.searchParams.append("include_image", "true");
      url.searchParams.append("per_page", "50");
      url.searchParams.append("page", page.toString());
  
      if (searchTerm) {
        url.searchParams.append("search", searchTerm);
      }
  
      const response = await fetch(url.toString());
  
      if (!response.ok) {
        throw new Error(`Hiba: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      
      return {
        artists: result.data || [],
        totalPages: result.pagination?.total_pages || 1, 
      };
    } catch (error) {
      console.error("Hiba az API hívásban:", error);
      return { artists: [], totalPages: 1 };
    }
  }
  