/*
    - Originais Netflix
    - Recomendados Netflix (trending)
    - Em alta Netflix (top rated)
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentários
*/

const Base_Url = 'https://api.themoviedb.org/3';
const Api_Key = 'c282ecd1f23e9cc2c3cfa9e5d39176f9';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${Base_Url}${endpoint}`);
    const json = await req.json();
    console.log(json)
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