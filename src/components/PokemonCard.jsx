// TODO: Step 13 - pass props, and render id and name, see line 10 for a hint
export default function PokemonCard(/* something goes here, but what */) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        textAlign: "center",
        backgroundImage: `url(${props.sprite})`, // HINT 
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 120,
      }}
    >
      <p style={{ fontWeight: 700 }}>Hmmm.... something goes here</p>
      <p style={{ textTransform: "capitalize" }}>Hmmm.... something goes here</p>
    </div>
  );
}
