import Nav from '../components/Nav';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mangas_actions from "../redux/actions/mangas";
import chapters_actions from "../redux/actions/chapterData";
import Swal from 'sweetalert2';

export default function EditChapters() {
    const { manga_id } = useParams();
    const { getMangaDataAsync } = mangas_actions;
    const { get_chapters, delete_chapter, update_chapter } = chapters_actions;

    let store = useSelector(store => store);
    let manga = store.manga.manga;
    let chapters = store.chapters.chapters;

    let dispatch = useDispatch();

    useEffect(() => {
        if (manga.length === 0) {
        dispatch(getMangaDataAsync(manga_id));
        }
    }, []);

    useEffect(() => {
        if (chapters.length === 0) {
        dispatch(get_chapters(manga_id));
        }
    }, []);

    const [chapterTitle, setTitle] = useState("");
    const [chapterImg, setImage] = useState(manga.cover_photo);
    const [chapterNum, setNum] = useState("");
    const [currentChapter, setChapter] = useState({});
    const [param, setParam] = useState("");
    const [inputValue, setInputValue] = useState("");

    function handleTitle(e) {
        let selectedChapter = chapters.find(chapter => chapter.title === e.target.value);

        setTitle(e.target.value);
        setNum(selectedChapter.order);
        setImage(selectedChapter.cover_photo);
        setChapter(selectedChapter);
    }

    function handleData(e) {
        let selectedChapter = chapters.find(chapter => chapter.title === chapterTitle);

        setParam(e.target.value);
        setInputValue(selectedChapter[e.target.value]);
    }

    let showAlertDelete = (title, httpCb) => {
        Swal.fire({
        title,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes, I'm sure",
        denyButtonText: "No"
        }).then((result) => {
        if (result.isConfirmed) {
            httpCb();
            Swal.fire({
            html: `<p>Chapter deleted</p>`
            });
        }
        });
    };

    let showAlertEdit = (title, httpCb) => {
        Swal.fire({
        title,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Yes, I'm sure",
        denyButtonText: "No"
        }).then((result) => {
        if (result.isConfirmed) {
            if (validateData()) {
            httpCb();
            Swal.fire({
                html: `<p>Chapter edited</p>`
            });
            }
        }
        });
    };

    const validateData = () => {
        if (param === "cover_photo" && !isValidURL(inputValue)) {
        Swal.fire({
            html: `<p>Invalid URL</p>`
        });
        return false;
        }
        if (param === "title" && !inputValue.trim()) {
        Swal.fire({
            html: `<p>Title cannot be empty</p>`
        });
        return false;
        }
        if (param === "pages" && !isValidPageList(inputValue)) {
        Swal.fire({
            html: `<p>Invalid page list format</p>`
        });
        return false;
        }
        return true;
    };

    const isValidURL = (url) => {
        // Regular expression to validate URL format
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    };

    const isValidPageList = (pages) => {
        // Regular expression to validate page list format (comma-separated URLs)
        const pageListPattern = /^((ftp|http|https):\/\/[^ ,]+,?)+$/;
        return pageListPattern.test(pages);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleEditChapter = () => {
        let token = localStorage.getItem("token");
        const updateData = {
        [param]: inputValue,
        manga_id,
        chapter_id: currentChapter._id,
        author_id: manga.author_id,
        token,
        };
        dispatch(update_chapter(updateData));
    };

    const handleDeleteChapter = () => {
        let token = localStorage.getItem("token");
        dispatch(delete_chapter({ chapter_id: currentChapter._id, manga_id, author_id: manga.author_id, token }));
        setTitle(null);
        setImage(manga.cover_photo);
    };

    return (
        <div>
        <Nav />
        <div className='w-screen h-screen bg-[url("/images/Ellipse.png")] bg-cover flex'>
            <div className='p-[5%] w-[95%] lg:w-[50%] text-[#9D9D9D] flex flex-col justify-around items-center mx-auto'>
            <h1 className='text-4xl text-white'>Edit Chapter</h1>
            <div className='space-y-3 flex flex-col w-[80%] lg:w-[60%]'>
                <h2 className='p-1 border-b-[1px] border-white'>{manga.title}</h2>
                <select name='chapters' id='chapters' className='p-1 border-b-[1px] border-white bg-transparent' onChange={handleTitle}>
                <option value=''>select chapter</option>
                {chapters.map((chapterItem) => (
                    <option key={chapterItem.order} value={chapterItem.title}>{chapterItem.title}</option>
                ))}
                </select>
                <select name='chapters' id='data' className='bg-transparent border-b-[1px] border-white' onChange={handleData}>
                <option value=''>select data</option>
                <option value="title">Title</option>
                <option value="pages">Pages</option>
                <option value="cover_photo">Cover photo</option>
                </select>
                <input type='text' value={inputValue ? inputValue : ''} className='bg-transparent border-b-[1px] border-white' onChange={handleInputChange} />
            </div>
            <div className='w-[60%] lg:w-[60%] flex flex-col space-y-7'>
                <button
                className='text-white bg-[#34D399] py-5 rounded-lg'
                onClick={() =>
                    showAlertEdit('Are you sure you want to edit this chapter?', handleEditChapter)}
                >
                Edit
                </button>
                <button
                className='text-white bg-[#EE8380] py-5 rounded-lg'
                onClick={() =>
                    showAlertDelete("Are you sure you want to delete?", handleDeleteChapter)}
                >
                Delete
                </button>
            </div>
            </div>
            <div className='hidden lg:flex flex-col justify-center items-center w-[50%] p-[5%]'>
            <h2 className='text-white text-center'>{chapterTitle ? "Chapter #" + chapterNum + "- " + chapterTitle : ""}</h2>
            <img className='w-[60%] object-cover' src={chapterImg ? chapterImg : manga.cover_photo} alt='' />
            </div>
        </div>
        </div>
    );
}

