import ArtistCard from './ArtistCard';

export default function ArtistCardsContainer ({ attractions }) {
  return (
    <>
    <section className="cardscontainer">
        {attractions?.[0]?._embedded?.attractions?.map((attraction) => (
            <ArtistCard key={attraction.id} artist={attraction} />
            ))}
    </section>
    </>
  );
};

