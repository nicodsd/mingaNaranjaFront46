function CategoriesListMymangas(props) {

    const {categories, cates, setCats} = props

    return (
        <>
            {categories.map((eachCategory, index) => (

                <button key={index} className={`text-start mr-1 md:mr-3 text-sm ${cates?.includes(eachCategory._id) ? 'text-white' : 'text-[#9d9d9d]'}`} data-valor={eachCategory._id} id={eachCategory._id} onClick={() => setCats(eachCategory._id)}>
                    {eachCategory.name}
                </button>

            ))}
        </>
    )
}

export default CategoriesListMymangas