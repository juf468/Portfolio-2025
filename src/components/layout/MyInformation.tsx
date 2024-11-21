import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Image } from "../common/Image";

export const MyInformation = () => {
  const skillsText =
    "SCRUM - API Handling - API consumption - RESTful API handling - Git Flow - Github - Collaborative - CRUD - Responsive Websites - Deploy.";
  const phrases = skillsText.split(" - ");

  const TecnologiesText =
    "JavaScript - TypeScript - React.JS - REDUX - REDUX Toolkit - Axios - Zustand - CSS - Tailwind - HTML - Node.js - Express - PostgreSQL.";
  const phrases2 = TecnologiesText.split(" - ");

  return (
    <div className="flex flex-col space-y-8 ">
      <Image />
      <div className="ml-20 h-auto w-[500px] rounded-md bg-slate flex-col py-4 px-4 ">
        <h1 className="items-center flex justify-center text-rose text-[40px] font-sora">
          Julia Franchi
        </h1>
        <div className="flex items-center justify-center space-x-12 mt-4 mb-6">
          <GithubLogo size={72} color="#e11d48" />
          <LinkedinLogo size={72} color="#e11d48" />
        </div>
        <h3 className="items-center flex justify-center text-orange2 text-3xl font-sora mb-6">
          FULLSTACK DEVELOPER
        </h3>
        <div className="font-sora py-2 px-4">
          <p className="font-sora font-semibold text-rose text-xl mb-2">
            TECNOLOGIAS:
          </p>
          {phrases2.map((phrase, index) => (
            <span key={index}>
              <span
                className={
                  index % 2 === 0
                    ? "text-rose2 text-xl"
                    : "text-orange2 text-lg"
                }
              >
                {phrase}
              </span>

              {index !== phrases2.length - 1 && " - "}
            </span>
          ))}
        </div>
        <div className=" font-sora py-2 px-4">
          <p className="font-sora font-semibold text-rose text-xl mb-2">
            SKILLS:
          </p>
          {phrases.map((phrase, index) => (
            <span key={index}>
              <span
                className={
                  index % 2 === 0
                    ? "text-rose2 text-xl"
                    : "text-orange2 text-lg"
                }
              >
                {phrase}
              </span>

              {index !== phrases.length - 1 && " - "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
