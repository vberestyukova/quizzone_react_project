import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import QuizPage from "./pages/QuizPage"
import { MainPage } from "./pages/MainPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { ChooseCategoryPage } from "./pages/ChooseCategoryPage/ChooseCategoryPage"
import Catalog from "./pages/Catalog";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PersonalAccountPage from "./pages/PersonalAccountPage";
import Rating from "./pages/Rating";

function App() {
      return (
            <div className='body'>
                <Header/>
                <section className='main_content'>
                        <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route  path="/quiz_game" element={<QuizPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route  path="/choose_quiz" element={<ChooseCategoryPage />} />
                        <Route  path="/catalog" element={<Catalog />} />
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/account"} element={<PersonalAccountPage />} />
                        <Route path={"/registration"} element={<Registration />} />
                        <Route path={"/rating"} element={<Rating />} />
                        </Routes>
                </section>
                {/*<footer className='footer'>© QuizZone 2022</footer>*/}
            </div>
      );
}

export default App;
