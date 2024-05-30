/* eslint-disable no-useless-escape */
import { useState } from "react";

function App() {
  const [allUrls, setAllUrls] = useState<string[]>([
    "facebook.com",
    "https://google.com",
    "map.google.com",
    "drive.google.com",
    "github.com",
  ]);
  const [url, setUrl] = useState<string>("");
  const handleAddUrl = async () => {
    setAllUrls((prev) => [...prev, url]);
  };
  const condition = true;
  return (
    <div className="h-screen border overflow-hidden flex flex-col justify-center items-center text-base gap-10">
      <div className="shadow-[2px_2px_20px_1px] shadow-blue-400 rounded-lg p-10 space-y-5 w-[30%]">
        <input
          type="text"
          placeholder="Write Your URL"
          className="border border-gray-200 rounded-xl w-full p-3"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button
          className="w-full py-[10px] bg-blue-500 text-white rounded-xl hover:bg-blue-700 duration-300 text-base"
          onClick={handleAddUrl}
        >
          Get Favicon
        </button>
      </div>
      <div className="flex justify-center items-center gap-10 w-[60%] mx-auto">
        <div className="shadow-[2px_2px_20px_1px] shadow-blue-400 rounded-lg p-6 space-y-5 w-full">
          <div className="flex justify-center items-center gap-5 flex-wrap overflow-y-auto min-h-[120px] max-h-[300px]">
            {allUrls.map((domain, index) => (
              <div
                key={index}
                className="p-3 bg-gray-200 rounded-full size-[70px] flex justify-center items-center"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${domain}&sz=${40}`}
                  alt="favicon"
                  className={`favicon border ${
                    condition ? "rounded-full" : "rounded-none"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
