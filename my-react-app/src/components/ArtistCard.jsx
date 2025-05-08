export default function ArtistCard ({artist}) {
  return (
    <>
    <div className={"card"}>
      {artist.name}
      <img src={artist?.images?.[0].url} />
    </div>
    </>
  );
}
