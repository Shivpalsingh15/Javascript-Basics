let url = "https://catfact.ninja/fact";
// let url = "https://numbersapi.com/random/math";

async function facts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("res:", data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("res:", data2.fact);
  } catch (error) {
    console.log("error:", error);
  }
  
}

