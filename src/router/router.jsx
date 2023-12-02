import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Register from "../pages/Register.jsx";
import LogIn from "../pages/LogIn.jsx";
import Index from "../pages/Index.jsx";
import AuthForm from "../pages/AuthForm.jsx";
import NewRole from "../pages/NewRole.jsx";
import AuthorForm from "../pages/AuthorForm.jsx";
import CompanyForm from "../pages/CompanyForm.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import ChapterForm from "../pages/ChapterForm.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Page from "../components/Page.jsx"
import MangaDetails from "../pages/MangaDetails.jsx";
import Chapters from "../pages/Chapters.jsx";
import Mangas from "../pages/Mangas.jsx"
import MyMangas from "../pages/MyMangas.jsx";
import Author from "../pages/Author.jsx";
import PanelAdmin from "../pages/PanelAdmin.jsx";
import EditChapters from "../pages/EditChapters.jsx";
import Donation from "../pages/Donation.jsx";
import MyReactions from "../pages/MyReactions.jsx";

let token = localStorage.getItem("token");
let role = JSON.parse(localStorage.getItem("user"))?.role;

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Index /> },
            { path: "/mangas/:page", element: <Mangas /> },
            { path: "/mymangas", element: role >= 1 && token ? <MyMangas /> : <Navigate to="/" /> },
            { path: "/auth", element: <AuthForm /> },
            { path: "/register", element: <Register /> },
            { path: "/LogIn", element: <LogIn /> },
            { path: "/new-role", element: role === 0 && token ? <NewRole /> : <Navigate to="/" /> },
            { path: "/author-form", element: token ? <AuthorForm /> : <Navigate to="/" /> },
            { path: "/company-form", element: token ? <CompanyForm /> : <Navigate to="/" /> },
            { path: "/manga-form", element: role >= 1 && token ? <MangaForm /> : <Navigate to="/" /> },
            { path: "/chapter-form", element: <ChapterForm /> },
            { path: "/chapters/:id/:page", element: <Page /> },
            { path: "/manga/:id", element: <MangaDetails /> },
            { path: "/manga/:id/:page", element: <Chapters /> },
            { path: "/authors/:id", element: token ? <Author /> : <ErrorPage /> },
            { path: "/donation", element: <Donation /> },
            { path: "/favourites", element: role >= 0 && token ? <MyReactions /> : <ErrorPage /> },
            { path: "/edit/:manga_id", element: (role === 1 || role === 2) && token ? <EditChapters /> : <Navigate to="/" /> },

            { path: "/admin", element: role === 3 && token ? <PanelAdmin /> : <Navigate to="/" /> }
        ],
    },
    {
        path: "*", // cualquier ruta desconocida
        element: <ErrorPage />, // redirigir a la pÃ¡gina de inicio
    },
]);


export default routes;
