import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import App from "./App";

function RoutsApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App/>  }/>

            <Route path="*" element={ <Error/> }/>
            
        </Routes>
        
        </BrowserRouter>
    )
}
export default RoutsApp;