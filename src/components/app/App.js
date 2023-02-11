
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

import { MainPage } from "../pages"


const Page404 = lazy(() => import('../pages/404'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SinglePage = lazy(() => import('../pages/SinglePage'))
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'))
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'))


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />} >
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route path="/characters/:id" element={ <SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                            <Route path="/comics/:id" element={ <SinglePage Component={SingleComicLayout} dataType='comic'/>} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}
export default App;