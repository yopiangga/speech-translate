import { useEffect, useState } from "react";
import { FiChevronLeft, FiHome, FiMic, FiStopCircle } from "react-icons/fi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { GoogleGenAI } from "@google/genai";
import TextToSpeech from "src/components/loading/text-to-speech";

const lang = [
  { code: "en-US", name: "English" },
  { code: "id-ID", name: "Indonesia" },
];

export function HomePage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const ai = new GoogleGenAI({ apiKey: apiKey });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [baseLang, setBaseLang] = useState(lang[0]);
  const [targetLang, setTargetLang] = useState(lang[1]);

  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    if (transcript == "") return;
    ai.models
      .generateContent({
        model: "gemini-2.0-flash",
        contents:
          "The context is for medical dental. Translate this text to " +
          targetLang.name +
          ": " +
          transcript +
          ". Result only the translated text.",
      })
      .then((response) => {
        setTargetText(response.text || "");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [transcript]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-950 text-gray-50">
      <div className="w-11/12 flex flex-col relative justify-between h-full">
        <div className="flex justify-between w-full items-center py-4">
          <div>
            <FiChevronLeft size={20} />
          </div>
          <div className="text-2xl font-bold">
            <h1>
              Auto <span className="text-green-600">Translator</span>
            </h1>
          </div>
          <div>
            <FiHome size={20} />
          </div>
        </div>

        <div className="h-4"></div>

        <div className="flex lg:flex-row flex-col items-center justify-center w-full h-full gap-4">
          <div className="bg-slate-900 w-11/12 lg:w-1/2 h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-4">
            <p className="text-md w-full h-full">{transcript}</p>
          </div>
          <div className="bg-slate-900 w-11/12 lg:w-1/2 h-full rounded-xl shadow-lg flex flex-col items-center justify-center p-4 relative">
            <div className="absolute top-2 right-3">
              <TextToSpeech text={targetText} codeLang={
                targetLang.code
              } />
            </div>
            <p className="text-md w-full h-full">{targetText}</p>
          </div>
        </div>

        <div className="flex justify-between w-full items-center py-4">
          <div className="text-center w-5/12">
            <button
              onClick={() => {
                const temp = baseLang;
                setBaseLang(targetLang);
                setTargetLang(temp);
                resetTranscript();
                setTargetText("");
              }}
            >
              <h4 className="text-md">{baseLang.name}</h4>
            </button>
          </div>
          <div className="text-2xl font-bold w-2/12 flex justify-center">
            {listening ? (
              <button
                onClick={() => SpeechRecognition.stopListening()}
                className="bg-slate-900 rounded-lg flex flex-col items-center justify-center p-4"
              >
                <FiStopCircle />
              </button>
            ) : (
              <button
                onClick={() =>
                  SpeechRecognition.startListening({
                    continuous: true,
                    language: baseLang.code,
                  })
                }
                className="bg-slate-900 rounded-lg flex flex-col items-center justify-center p-4"
              >
                <FiMic />
              </button>
            )}
          </div>
          <div className="text-center w-5/12">
            <button
              onClick={() => {
                const temp = targetLang;
                setTargetLang(baseLang);
                setBaseLang(temp);
                resetTranscript();
                setTargetText("");
              }}
            >
              <h4 className="text-md">{targetLang.name}</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
