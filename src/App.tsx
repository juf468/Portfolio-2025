import { ContactMe } from "./components/layout/ContactMe";
import { Image } from "./components/common/Image";
import { MyInformation } from "./components/layout/MyInformation";

function App() {
  return (
    <div className="w-screen h-screen">
      <ContactMe />
      <Image />
      <MyInformation />
    </div>
  );
}

export default App;
