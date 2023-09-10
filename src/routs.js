import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";
import PageSobre from "./pages-sobre";

function RoutsApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/pageSobre" element={ <PageSobre/>}/>

                <Route path="*" element={<Error />} />

            </Routes>

        </BrowserRouter>
    )
}
export default RoutsApp;