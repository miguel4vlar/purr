async function fetchCatContent() {
    const catUrl = 'https://api.thecatapi.com/v1/images/search';
    const factUrl = 'https://catfact.ninja/fact';
  
    try {
      // Fetch cat picture
      const imageResponse = await fetch(catUrl);
      const imageData = await imageResponse.json();
      const catImage = imageData[0].url;
  
      // Fetch cat fact
      const factResponse = await fetch(factUrl);
      const factData = await factResponse.json();
      const catFact = factData.fact;
  
      // Update Domain
      document.getElementById('cat-image').src = catImage;
      document.getElementById('cat-fact').innerText = catFact;
  
    } catch (error) {
      console.error('Error fetching cat content:', error);
      document.getElementById('cat-fact').innerText = "Something went wrong. Try again!";
    }
  }
  
  // Load initial content on page load
  window.onload = fetchCatContent;
  