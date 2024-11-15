import { PaperPlaneTilt } from "phosphor-react";

export const ContactMe = () => {
  return (
    <nav className="relative cursor-pointer text-rose text-3xl font-bold h-16 w-full pr-20 flex items-center justify-end rounded-md bg-ambar overflow-hidden transition-colors duration-500 ease-in-out">
      <PaperPlaneTilt
        size={38}
        color="#e11d48"
        weight="bold"
        className="mr-2"
      />
      <span className="relative ">Contáctame</span>
      <div className="absolute inset-0 bg-gradient-to-r text-white from-ambar2 via-orange to-rose opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 flex items-center justify-end pr-20">
        <PaperPlaneTilt
          size={38}
          color="#ffffff"
          weight="bold"
          className="mr-2"
        />
        <span>Contáctame</span>
      </div>
    </nav>
  );
};
