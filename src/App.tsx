import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/AppContextProvider";
import AppSpeechRouter from "./routers";

export default function AppSpeech() {
  return (
    <AppContextProvider>
      <div className="h-screen w-full relative">
        <AppSpeechRouter />
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </AppContextProvider>
  );
}
