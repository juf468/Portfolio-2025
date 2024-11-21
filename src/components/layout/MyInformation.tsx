import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Image } from "../common/Image";

export const MyInformation = () => {
  return (
    <div>
      <Image />
      <div className=" ml-20 h-auto w-[500px] border-4 border-red-500 ">
        <span className="items-center flex  justify-center font-semibold text-[40px] font-host">
          Julia Franchi(host) sb
        </span>
        <span className="items-center flex  justify-center  font-semibold text-[40px] font-rubik">
          Julia Franchi (rubik) sb
        </span>
        <span className="items-center flex  justify-center font-semibold text-[40px] font-IMB">
          Julia Franchi (ibm) sb
        </span>
        <span className="items-center flex justify-center   text-[40px] font-DM">
          Julia Franchi (dm) sb
        </span>
        <span className="items-center flex   justify-center   text-[40px] font-sora">
          Julia Franchi (sora) sb
        </span>
        <br />
        <div className=" mt-4 flex flex-row items-center justify-center space-x-12">
          <GithubLogo size={72} color="#e11d48" weight="duotone" />
          <LinkedinLogo size={72} color="#e11d48" weight="duotone" />
        </div>
        <br />
        <br />
        <span>TECNOLOGIAS:</span>
        <br />
        <span>
          {" "}
          JavaScript - TypeScript - React.JS - REDUX - REDUX Toolkit - Axios -
          Zustand - CSS - Tailwind - HTML - Node.je - Express - PostgreSQL.
        </span>
        <br />
        <br />
        <span>SKILLS:</span>
        <br />

        <span>
          {" "}
          Frontend Developer - Backend Developer - SCRUM - API Handling - API
          consumption - RESTful API handling - Gitflow - Github - Collaborative
          - CRUD - Responsive Webs - Deploy.{" "}
        </span>
      </div>
    </div>
  );
};
