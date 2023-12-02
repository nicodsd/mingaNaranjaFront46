import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import SwitchButtonAdmin from '../components/SwitchButtonAdmin.jsx';
import apiUrl from '../../api'

import companies_action from '../redux/actions/companies.js'
import authors_action from '../redux/actions/authors.js'

const { get_companies } = companies_action
const { get_authors } = authors_action

export default function PanelAdmin() {
    let dispatch = useDispatch()

    let store = useSelector(store => store);

    let activeAuthors = store.authors.active
    let inactiveAuthors = store.authors.inactive
    let authors = (inactiveAuthors ?? []).concat(activeAuthors ?? [])

    let activeCompanies = store.companies.active
    let inactiveCompanies = store.companies.inactive
    let companies = (inactiveCompanies ?? []).concat(activeCompanies ?? [])

    /* console.log(store) */

    useEffect(() => {
        if (!authors.length || !companies.length) {
            dispatch(get_companies());
            dispatch(get_authors());
        }
    }, []);

    const Companies = () =>
        <div className="flex flex-col h-auto w-full">
            <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 ">
                <table className="w-full flex flex-row justify-center">
                    <tbody className="w-full">
                        {companies.map((company) => (
                            <tr
                            key={company._id}
                            className="flex flex-wrap justify-between items-center sm:flex-nowrap sm:flex-row sm:justify-between sm:items-center py-3 border-b border-black"
                        >
                            <td className="flex items-center sm:w-1/3">
                                <svg
                                    className="h-6 w-6 fill-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <p className="pl-2">{company.name}</p>
                            </td>
                            <td className="py-2 sm:py-0 sm:w-2/3">
                                <p className="">{company.website}</p>
                            </td>
                            <td className="flex gap-4 mr-2">
                                <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={company.logo} alt="" />
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <SwitchButtonAdmin
                                        company={company}
                                        url={`${apiUrl}auth/role/company/`}
                                        params={company._id}
                                        activeSection={activeSection}
                                    />
                                </label>
                            </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    const Authors = () => {
        return (
            <div className="flex flex-col h-auto w-full">
                <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2">
                    <table className="w-full">
                        <tbody className='w-full'>
                            {authors.map((author) => (
                                <tr
                                    key={author._id}
                                    className="flex flex-wrap justify-between items-center sm:flex-nowrap sm:flex-row sm:justify-between sm:items-center py-3 border-b border-black"
                                >
                                    <td className="flex items-center sm:w-1/3">
                                        <svg
                                            className="h-6 w-6 fill-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <p className="pl-2">{author.name}</p>
                                    </td>
                                    <td className="py-2 sm:py-0 sm:w-1/3">
                                        <p className="">{moment(author.createdAt).format("DD/MM/YYYY")}</p>
                                    </td>
                                    <td className="py-2 sm:py-0 sm:w-1/3">
                                        <p className="">{author.city}</p>
                                    </td>
                                    
                                    <td className="flex gap-4 mr-2">
                                        <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src={author.photo} alt="" />
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <SwitchButtonAdmin
                                                author={author}
                                                url={`${apiUrl}auth/role/author/`}
                                                params={author._id}
                                                activeSection={activeSection}
                                            />
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };


    const [activeSection, setActiveSection] = useState('companies');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    let currentSection;
    if (activeSection === 'authors') {
        currentSection = <Authors />;
    } else if (activeSection === 'companies') {
        currentSection = <Companies />;
    }

    return (
        <div className="text-white min-h-screen w-full flex flex-col items-center bg-[url('/public/images/bg-panel-admin.png')] bg-no-repeat bg-cover bg-center">
            <p className="font-montserrat font-semibold text-6xl mt-[10rem]">
                Panel
            </p>
            <div className="w-[90%] bg-slate-400 text-black flex justify-center items-center rounded-2xl my-4 mt-[6rem]">
                <div className='flex flex-col w-full'>
                    <p className="font-montserrat font-bold text-2xl leading-10 text-center my-12">
                        <span className="border-b-4 border-black">Entities</span>
                    </p>
                    <div className="flex justify-center flex-col items-center mb-4">
                        <nav className="flex justify-center w-full radius-top-4">
                            <button
                                onClick={() => handleSectionChange('companies')}
                                className={`w-[45%] rounded-tl-2xl py-2 ${activeSection === 'companies' ? 'bg-black text-white' : 'bg-slate-200'}`}
                            >
                                Companies
                            </button>
                            <button
                                onClick={() => handleSectionChange('authors')}
                                className={`w-[45%] rounded-tr-2xl py-2 ${activeSection === 'authors' ? 'bg-black text-white' : 'bg-slate-200'}`}
                            >
                                Authors
                            </button>
                        </nav>
                        <div className="w-[90%] flex justify-center items-center bg-slate-200">
                            {currentSection}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
