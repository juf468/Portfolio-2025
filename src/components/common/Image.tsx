import CAT_IMG from "../../assets/Imagenes/cat-asparragus.avif";

export const Image = () => {
  return (
    <div>
      <img
        className="rounded-full h-80 w-80 object-cover"
        src={CAT_IMG}
        alt="gatito"
      />
    </div>
  );
};
