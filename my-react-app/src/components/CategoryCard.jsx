import EventCard from "./EventCard";

export default function CategoryCard({ data, favorites, addToFavorites, removeFromFavorites }) {
  return (
    <ul>
      {data.map((attraction) => (
        <li key={attraction.id}>
          <EventCard event={attraction} clickable={false} />
          {/* AI brukt til å fikse på noe syntaks på conditional knappene, se rapport */}
          {favorites.some((fav) => fav.id === attraction.id) ? (
            <button onClick={() => removeFromFavorites(attraction)}>💕</button>
          ) : (
            <button onClick={() => addToFavorites(attraction)}>🖤</button>
          )}
        </li>
      ))}
    </ul>
  );
}
