import Presentation from "../components/Presentation"
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
//import save_author from "../redux/actions/save_author";
//const { saveAuthorData } = save_author
//const { saveMangas } = save_author

export default function Index() {
    //const store = useSelector(store => console.log(store.save_author))
    return (
        <main id="Home">
            {<Presentation />}
            <div className="min-h-[100vh] relative md:w-full md:flex md:items-center md:justify-around">
                <Carousel/>
                <Welcome/>
            </div>
        </main>
    )
}
