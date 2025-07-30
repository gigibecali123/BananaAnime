function searchAnime() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".anime-card");
  let found = false;

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    if (name.includes(input)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("notFound").style.display = found ? "none" : "block";
}
