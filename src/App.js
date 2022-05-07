import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import QuizPage from "./pages/QuizPage"
import { MainPage } from "./pages/MainPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { CSSTransition } from 'react-transition-group';
import { ChooseCategoryPage } from "./pages/ChooseCategoryPage/ChooseCategoryPage"
import Catalog from "./pages/Catalog";

// const express = require('express');
// const config = require('config');
// const mongoose = require('mongoose');
//
// const app = express();
//
// const PORT = config.get('port') || 5000;
//
// async function start() {   //Для подключения БД
//   try{
//     await mongoose.connect(config.get('mongoUri'), {
//
//     }); //Дождемся, пока выполнится
//     app.listen(5000, () => console.log(`App has been started on port ${PORT}...`));
//   } catch (e) {
//     console.log('Server Error ', e.message);
//     process.exit(1); //Завершение процесса
//   }
// }
// start();



function App() {
const routes = [
    {path: "/", Component: MainPage},
    {path: "/quiz_game", Component: QuizPage },
    {path: "/about", Component: AboutPage},
    {path: "*", Component: NotFoundPage}
]
      return (
            <div className='body'>
                <Header/>
                <section className='main_content'>
                    {/*<Routes>*/}
                    {/*    {routes.map(({path, Component}) =>*/}
                    {/*    <Route key={path} exact path={path}>*/}
                    {/*        {({match}) =>*/}
                    {/*            <CSSTransition*/}
                    {/*            timeout={1000}*/}
                    {/*            unmountOnExit*/}
                    {/*            in={match !== null}>*/}
                    {/*                <Component/>*/}
                    {/*            </CSSTransition>*/}
                    {/*        }*/}
                    {/*    </Route>*/}
                    {/*    )}*/}
                    {/*</Routes>*/}
                        <Routes>
                        <Route exact path="/" element={<MainPage />} />
                        <Route  path="/quiz_game" element={<QuizPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route  path="/choose_quiz" element={<ChooseCategoryPage />} />
                        <Route  path="/catalog" element={<Catalog />} />
                        </Routes>
                </section>
                <footer className='footer'>© QuizZone 2022</footer>
            </div>
      );
}

export default App;
