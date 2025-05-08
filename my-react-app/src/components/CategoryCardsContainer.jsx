import EventCard from "./EventCard";

export default function CategoryCardsContainer({ data, favorites, addToFavorites, removeFromFavorites }) {
  return (
<section className="cardscontainer">
      {data.map((attraction) => (
        <div key={attraction.id}>
            <EventCard key={attraction.id} event={attraction} clickable={false} />
            {/* AI brukt til å fikse på noe syntaks på conditional knappene, se rapport */}
            {favorites.some((fav) => fav.id === attraction.id) ? (
              <button className="heart" onClick={() => removeFromFavorites(attraction)}>💕</button>
            ) : (
              <button className="heart" onClick={() => addToFavorites(attraction)}>🖤</button>
            )}
        </div>
      ))}
</section>
  );
}
