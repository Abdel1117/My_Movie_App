import { getMovieByPath } from "@/app/utils/movieClient";

export async function GET(request: Request) {

    const {searchParams } = new URL(request.url);
    const query = searchParams.get("query") ;
    const searchResuls = await getMovieByPath("/search/movie", 
        [
            {
            key: "query",
            value: query ,
            },
    ]);

    return new Response(JSON.stringify(searchResuls), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}