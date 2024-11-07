export async function GET(request) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("query") || "";
  const dummyData = [
    { id: 1, name: "Innovation 1" },
    { id: 2, name: "Innovation 2" },
    { id: 3, name: "Innovation 3" },
    { id: 4, name: "Innovation 4" },
  ];

  console.log("Search Query:", searchQuery); // Log the search query

  const filteredResults = dummyData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("Filtered Results:", filteredResults); // Log the filtered results

  // Ensure we're returning a valid response
  return new Response(JSON.stringify(filteredResults), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
