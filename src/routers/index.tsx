import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingComponent } from "../components/loading/loading-component";
import { HomePage } from "../pages/home";

export default function AppSpeechRouter(){
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (load) {
        return (
            <LoadingComponent />
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        );
    }

} 