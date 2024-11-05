export const ContactMe = () => {
  return (
    <nav className="relative cursor-pointer text-rose  text-3xl font-bold h-16 w-full pr-20 flex items-center justify-end rounded-md bg-ambar overflow-hidden transition-colors duration-500 ease-in-out">
      <span className="relative">Contáctame</span>
      <div className="absolute inset-0 bg-gradient-to-r text-white before:h-16 before:w-full before:self-center from-ambar2 via-orange to-rose opacity-0  before:pr-20 before:text-3xl transition-opacity duration-500 ease-in-out hover:opacity-100 before:content-['Contáctame'] before:relative before:overflow-hidden before:flex before:justify-end before:items-center"></div>
    </nav>
  );
};
