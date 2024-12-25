const Starting = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center p-12">
      <div className="w-full  h-64 bg-gradient-to-l from-[#b6f492] to-[#338b93] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6">
        <span className="font-shojumaru text-6xl text-center">Hello</span>
        <span className="font-notoSansap text-4xl text-center">こんにちは</span>
        <span className="text-3xl text-right">नमस्ते</span>
        <span className="text-2xl text-right">Hallo</span>
      </div>
      <div className="w-full text-right space-y-5 mt-20 mb-36">
        <h1 className="font-righteous text-4xl  text-white uppercase">
          Language Translator
        </h1>
        <button className="w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full font-righteous font-bold text-lg uppercase text-gray-700 tracking-widest active:translate-y-[1px]">
          Start
        </button>
      </div>
    </div>
  );
};

export default Starting;
