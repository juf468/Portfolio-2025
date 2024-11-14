import CAT_IMG from "../../assets/Imagenes/MEME-GATO-2-1024x576.jpg";

export const Image = () => {
  return (
    <div className="mt-10 ml-32 ">
      <img
        className="rounded-full w-[16vw] h-[16vw]  object-cover"
        src={CAT_IMG}
        alt="gatito"
      />
    </div>
  );
};
