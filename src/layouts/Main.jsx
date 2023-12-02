import { useLocation, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    const { id, page } = useParams();

    const navRoutes = [
        '/',
        '/author-form',
        '/company-form',
        '/manga-form',
        '/chapter-form',
        `/authors/${id}`,
        `/mangas/${page}`,
        '/manga/:id/:page',
        '/manga/:id',
        '/new-role',
        '/admin',
        '/mymangas',
        '/donation',
        '/favourites'
    ];

    const viewNav = navRoutes.includes(location.pathname);
    const viewFooter = [
        '/manga-form',
        '/chapter-form',
        '/author-form',
        '/company-form',
        '/auth',
        '/new-role',
        '/admin'
    ].includes(location.pathname);


    return (
        <div className="min-h-screen bg-black">
            {viewNav && <Nav />}
            <Outlet />
            {!viewFooter && <Footer />}
        </div>
    );
}
