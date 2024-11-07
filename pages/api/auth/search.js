// app/api/search/route.js
export async function GET(request) {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("query") || "";
    const dummyData = [
      { id: 1, name: "Result 1" },
      { id: 2, name: "Result 2" },
      { id: 3, name: "Result 3" },
      { id: 4, name: "Result 4" },
    ];
  
    const filteredResults = dummyData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return new Response(JSON.stringify(filteredResults), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  