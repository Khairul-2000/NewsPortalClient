
export async function fetchNewsSummary(url: string) {
    const res = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
  
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();  
    const rawText = data.Data; // 🟢 Use `result` key here
    console.log("Raw Text:", rawText);
   

    return rawText;
  }
  