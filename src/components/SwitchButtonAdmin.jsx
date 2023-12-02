import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import authors_action from '../redux/actions/authors.js'
const { update_authors } = authors_action

import companies_action from '../redux/actions/companies.js'
const { update_companies } = companies_action

export default function SwitchButtonAdmin({ author, company, params, activeSection }) {
    const dispatch = useDispatch();

    const [isOn, setIsOn] = useState(author?.active || company?.active);

    function handleSwitch() {
        let data = {
            active: !isOn,
        };
        setIsOn(!isOn);
        if (activeSection === "companies") {
            dispatch(update_companies({ id: params, data }));
        } else {
            dispatch(update_authors({ id: params, data }));
        }
    }

    return (
        <button
            type="button"
            className={`relative inline-block w-10 h-6 rounded-full transition-colors duration-300 ${(author?.active || company?.active) ? 'bg-[#12B28C]' : 'bg-[#970000b3]'
                }`}
            onClick={handleSwitch}
        >
            <span
                className={`absolute inset-0 w-4 h-4 mx-1 my-1 bg-white rounded-full transition-transform duration-300 ${(author?.active || company?.active) ? 'transform translate-x-full' : ''
                    }`}
            />
        </button>
    );
}
