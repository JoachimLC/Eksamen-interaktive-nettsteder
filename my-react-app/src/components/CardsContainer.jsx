import EventCard from './EventCard';

export default function CardsContainer  ({ cards, clickable }) {
  return (
    <>
    <section className="cardscontainer">
  
      {cards.map((card) => (
        <EventCard key={card.id} event={card} clickable={clickable}/>
      ))}
      
    </section>
    </>
  );
};
