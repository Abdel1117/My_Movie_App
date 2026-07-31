import "server-only"

export const getMovieByPath = async  (path : string, params = [], language : string  = "fr-FR" ) => {
    const url = new URL(`${process.env.TMDB_API_URL}${path}`);
    url.searchParams.append("api_key", process.env.TMDB_API_KEY || "");
    url.searchParams.append("language", language);

    params
        .filter((param) => param.value) 
        .forEach((param) => {
            url.searchParams.append(param.key, param.value)
        })
    
    return fetch(url).then((res) => res.json()).catch((e) => console.error("Une erreur est survenu lors de la récuparation des films populaires"));
}


export const getHydratedMovies = async (movieIds, language = "fr") => {
    console.log(movieIds)
    const moviePromises = movieIds?.map((movieId) => getMovieByPath(`/movie/${movieId}`, [], language));
    const movies = await Promise.all(moviePromises)
    return movies
}