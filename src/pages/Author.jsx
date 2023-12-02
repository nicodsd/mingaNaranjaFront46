import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import save_author from "../redux/actions/save_author";
import moment from "moment";
import axios from "axios";
import SwitchButton from "../components/SwitchButton"
import MangaAuthor from "../components/MangaAuthor";
import apiUrl from "../../api";
import ErrorPage from "../pages/ErrorPage";

const { saveAuthorData } = save_author
const { saveMangas } = save_author

export default function Author() {
    const dispatch = useDispatch()
    useSelector(store => console.log(store.save_author))
    const {
        author_photo,
        author_name,
        author_last_name,
        author_city,
        author_country,
        author_date,
        switchOn } = useSelector((state) => state.save_author);
    console.log(switchOn)
    /* console.log(saveAuthorData) */
    const { id } = useParams();
    const [author, setAuthor] = useState([]);
    const [mangas, setMangas] = useState([]);
    const [isOn, setIsOn] = useState(false);
    const [error, setError] = useState(false);

    function handleSaveAuthor(authorData) {
        dispatch(saveAuthorData({
            author_photo: authorData.photo,
            author_name: authorData.name,
            author_last_name: authorData.last_name,
            author_city: authorData.city,
            author_country: authorData.country,
            author_date: moment(authorData.createdAt).format("DD/MM/YYYY")
        }));
    }

    let token = localStorage.getItem("token")
    let headers = { headers: { "Authorization": `Bearer ${token}` } }

    useEffect(() => {
        Promise.all([
            axios.get(`${apiUrl}api/authors/${id}`, headers),
            axios.get(`${apiUrl}mangas/authors/${id}?new=${isOn}`, headers),
        ])
            .then((responses) => {
                const authorResponse = responses[0].data.response;
                const mangasResponse = responses[1].data.response;
                setAuthor(authorResponse);
                handleSaveAuthor(authorResponse);
                setMangas(mangasResponse);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, [id, isOn]);

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div className="min-h-[90vh] w-full text-white flex flex-col justify-center items-center">
            <div className="flex border-b-2 border-white pb-2">
                <img
                    className="rounded-full object-cover object-center h-16 w-16 mr-4"
                    src={author_photo}
                    alt="user avatar"
                />
                <div className="ml-1 text-white">
                    <p>{author_name} {author_last_name}</p>
                    <p className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {author_city},{author_country}
                    </p>
                    <p className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                        </svg>
                        {author_date}
                    </p>
                </div>
            </div>
            <SwitchButton {...{ isOn, setIsOn, id, saveMangas, dispatch, switchOn, headers, apiUrl }} />
            <MangaAuthor {...{ mangas }} />
        </div>
    );
}
