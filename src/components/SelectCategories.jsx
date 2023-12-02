import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import categories_actions from "../redux/actions/mangasGet"
const { read_categories } = categories_actions

function SelectCategories({ cat, classInput, selectClass, categoryEdit }) {

    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const dispatch = useDispatch()
    useEffect(
        () => {
            if (categories.length === 0) {
                dispatch(read_categories())
            }
        },
        []
    )

    return (
        <div className={selectClass}>
            <AiFillCaretDown className="absolute right-0" />
            <select
                ref={cat}
                onChange={categoryEdit}
                className={classInput}
                id=""
            >
                <option disabled defaultValue="">Insert category</option>
                {categories?.map((category) => (
                    <option id={category._id} value={category._id} key={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectCategories