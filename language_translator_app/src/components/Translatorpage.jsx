// eslint-disable-next-line react/prop-types

import { useEffect, useRef, useState } from "react";
import { languages } from "../../languagesData";
const Translatorpage = ({ onClose }) => {
  const [selectedlang, setSelectedlang] = useState("en");
  const [selectedlangto, setSelectedlangto] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLang, setCurentLang] = useState(null);

  //manage state for input to translare
  const [inputtext, setInputtext] = useState("");
  const [translateText, setTranslatedtext] = useState("");

  //count length of inpout

  const [charCount, setcharCount] = useState(0);
  const maxChars = 200;

  //handle click outside

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowLanguages(false);
    }
  };

  //effect

  useEffect(() => {
    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
    }
    //cleanup memory leaks uneffect bevaiours
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);
  //drop down the element outside

  const dropdownRef = useRef(null);
  const handle_language = (type) => {
    setCurentLang(type);

    setShowLanguages(true);
    console.log("clicked");
  };

  const handleinputchange = (e) => {
    const value = e.target.value;

    if (value.length <= maxChars) {
      setInputtext(value);
      setcharCount(value.length);
    }
  };

  //transalte data

  const handleTranslate = async () => {
    if (!inputtext.trim()) {
      setTranslatedtext("");
      return;
    }
    const responsedata = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputtext
      )}!&langpair=${selectedlang}|${selectedlangto}`
    );

    const response = await responsedata.json();
    setTranslatedtext(response.responseData.translatedText);
  };

  const handleselectlang = (ln) => {
    if (currentLang === "from") {
      setSelectedlang(ln);
    } else {
      setSelectedlangto(ln); // Correct state update
    }
    setShowLanguages(false);
  };

  const swapLanguage = () => {
    setSelectedlang(selectedlangto);
    setSelectedlangto(selectedlang);
  };

  //keydown

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTranslate();
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-6 relative">
      <button className="absolute  top-4 right-4">
        <i
          className="fa-solid fa-xmark text-xl text-gray-300"
          onClick={onClose}
        ></i>
      </button>

      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-l from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg">
        <div className="language" onClick={() => handle_language("from")}>
          {languages[selectedlang] || "English"}
        </div>
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={swapLanguage}
        ></i>
        <div className="language" onClick={() => handle_language("to")}>
          {languages[selectedlangto] || "English"}
        </div>
      </div>
      {showLanguages && (
        <div
          className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 left-8 z-10 rounded shadow-lg p-4  overflow-y-scroll scrollbar-hide"
          ref={dropdownRef}
        >
          <ul>
            {Object.entries(languages).map(([code, name]) => (
              <li
                key={code}
                className="cursor-pointer hover:bg-[#10646b]  transition duration-200 p-2 rounded"
                onClick={() => handleselectlang(code)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full relative ">
        <textarea
          className="textarea"
          value={inputtext || ""}
          onChange={handleinputchange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <div className="absolute  bottom-2 right-4 text-gray-800">
          {charCount}/{maxChars}
        </div>
      </div>
      <button className="w-12  h-12">
        <i
          className="fa-solid fa-chevron-down bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 flex justify-center items-center active:translate-y-[1px ]"
          onClick={handleTranslate}
        ></i>
      </button>
      <div className="w-full ">
        <textarea
          className="textarea"
          value={translateText || ""}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default Translatorpage;
