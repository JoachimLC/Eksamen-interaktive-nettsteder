import SanityCard from "./sanityCard";

export default function SanityCardsContainer ({ data }) {
  return (
    <>
    <section className="sanitycardscontainer">
        {data.map((user) => (
            <SanityCard key={user._id} data={user} />
            ))}
    </section>
    </>
  );
};

