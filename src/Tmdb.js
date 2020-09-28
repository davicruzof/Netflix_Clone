

/*
    - Originais Nteflix
    - Recomendados Nteflix (trending)
    - Em alta Nteflix (top rated)
    - Ação
    - Comédia
    - Terror
    - Romançe
    - Documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${Base_Url}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'topreated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'action',
                title: 'Acão',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'documetary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${Api_Key}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${Api_Key}`);
                break;
                case 'tv': 
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${Api_Key}`);
                break;
                default: 
                    info = null;
            }
        }

        return info;
    }
}