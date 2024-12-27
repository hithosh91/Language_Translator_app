import Starting from "./components/Starting";

import { useState } from "react";
import Translatorpage from "./components/Translatorpage";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#b6f492] to-[#338b93] flex justify-center items-center">
      <div className="w-[90%] max-w-lg bg-[#2d2d2d]  rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {show ? (
          <Translatorpage onClose={() => setShow(false)} />
        ) : (
          <Starting onStart={() => setShow(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
