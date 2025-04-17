import React, { useState, useEffect } from "react";
import { FiVolume2 } from "react-icons/fi";

interface TextToSpeechProps {
  text: string;
  codeLang: string; 
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, codeLang }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = codeLang;

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    if (utterance) {
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
        <button onClick={handlePlay}>
            <FiVolume2 />
        </button>
    </div>
  );
};

export default TextToSpeech;