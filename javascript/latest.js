document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "02b5eb252808641b434b28b2f63b9fbf";
    const searchTerms = [
      "football",
      "basketball",
      "badminton",
      "tennis",
      "table tennis",
      "hockey",
      "skating",
      "wrestling",
    ];
    const randomSearchTerm =
      searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const apiUrl = `https://gnews.io/api/v4/search?q=${randomSearchTerm}&token=${apiKey}&lang=en&max=9`;

    const newsContainer = document.getElementById("news-details");
    const seenUrls = new Set();
    newsContainer.innerHTML = "";
    const newap = new XMLHttpRequest();
    newap.open("GET", apiUrl, true);

    newap.onload = function () {
      if (newap.status >= 200 && newap.status < 300) {
        const data = JSON.parse(newap.responseText);
        console.log("API Response:", data);
        if (!data.articles || data.articles.length === 0) {
          newsContainer.innerHTML = "<p>No sports news found.</p>";
        } else {
          displayNews(data.articles);
        }
      } else {
        console.error("Error fetching the news:", newap.statusText);
        newsContainer.innerHTML =
          "<p>Failed to load news. Please try again later.</p>";
      }
    };

    newap.onerror = function () {
      console.error("Error fetching the news:", newap.statusText);
      newsContainer.innerHTML =
        "<p>Failed to load news. Please try again later.</p>";
    };

    newap.send();

    function displayNews(newsArray) {
      newsArray.forEach((news) => {
        if (!seenUrls.has(news.url)) {
          seenUrls.add(news.url);

          const col = document.createElement("div");
          col.classList.add("news-card");

          const card = document.createElement("div");
          card.className = "card";

          const image = document.createElement("img");
          image.className = "card-img-top";
          image.src = news.image || "default-image.jpg";

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          const newsHeading = document.createElement("h5");
          newsHeading.className = "card-title";
          newsHeading.textContent = news.title;

          const dateHeading = document.createElement("small");
          dateHeading.className = "text-muted";
          const date = new Date(news.publishedAt);
          dateHeading.textContent = `Published on: ${date.toDateString()}`;

          const description = document.createElement("p");
          description.className = "card-text";
          description.textContent =
            news.description || "No description available";

          const link = document.createElement("a");
          link.className = "btn";
          link.setAttribute("target", "_blank");
          link.href = news.url;
          link.textContent = "Read more";

          cardBody.appendChild(newsHeading);
          cardBody.appendChild(dateHeading);
          cardBody.appendChild(description);
          cardBody.appendChild(link);

          card.appendChild(image);
          card.appendChild(cardBody);

          col.appendChild(card);

          newsContainer.appendChild(col);
        }
      });
    }
  });