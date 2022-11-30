import './App.css';
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import PlayingHistory from "./PlayingHistory/PlayingHistory";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state from "./State";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={"/mainPage"} element={<MainPage main={state.main} like={props.like}/>}/>
                    <Route path={"/playingHistory"} element={<PlayingHistory data={state.history}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
