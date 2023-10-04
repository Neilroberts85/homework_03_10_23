import Film from "./Film"


const FilmList = ({filmsProp}) => {

    const filmReactComponents = filmsProp.map((filmInfo) => {
        return <Film key={filmInfo.id} name={filmInfo.name}>{filmInfo.url}</Film>
    })



    return(
        <>
        {filmReactComponents}
        </>
    )
}

export default FilmList