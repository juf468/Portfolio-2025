import { GithubLogo, LinkedinLogo } from "phosphor-react";

export const MyInformation = () => {
  return (
    <div className=" ml-20 h-64 w-[500px] border-4 border-red-500 ">
      <span className="items-center flex  justify-center font-bold text-[40px] ">
        JULIA FRNACHI
      </span>
      <div className=" mt-4 flex flex-row items-center justify-center space-x-12">
        <GithubLogo size={72} color="#e11d48" weight="duotone" />
        <LinkedinLogo size={72} color="#e11d48" weight="duotone" />
      </div>
    </div>
  );
};
