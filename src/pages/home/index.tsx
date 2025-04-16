import { FiChevronLeft, FiHome, FiMic } from "react-icons/fi";

export function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-950 text-gray-50">
      <div className="w-11/12 flex flex-col relative justify-between h-full">
      <div className="flex justify-between w-full items-center py-4">
        <div>
          <FiChevronLeft size={20}/>
        </div>
        <div className="text-2xl font-bold">
          <h1>Auto <span className="text-green-600">Translator</span></h1>
        </div>
        <div>
            <FiHome size={20}/>
        </div>
      </div>
      
      <div className="h-4"></div>

      <div className="flex lg:flex-row flex-col items-center justify-center w-full h-full gap-4">
            <div className="bg-slate-900 w-11/12 lg:w-1/2 h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-4">
                <p className="text-md w-full h-full">Your text</p>
            </div>
            <div className="bg-slate-900 w-11/12 lg:w-1/2 h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-4">
            <p className="text-md w-full h-full">Result translate</p>

            </div>

      </div>

      <div className="flex justify-between w-full items-center py-4">
        <div className="text-center w-5/12">
          <h4 className="text-xl">
            IDN
          </h4>
        </div>
        <div className="text-2xl font-bold">
          <button className="bg-slate-900 w-11/12 lg:w-1/2 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
            <FiMic />
          </button>
        </div>
        <div className="text-center w-5/12">
          <h4 className="text-xl">
            EN
          </h4>
        </div>
      </div>
      </div>
    </div>
  );
}
