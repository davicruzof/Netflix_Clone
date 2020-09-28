import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredata, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(
    () => {
      const loadAll = async () => {
        //Pegando ao lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //Pegando Feature

        let originals = list.filter(i=> i.slug === 'originals');
        let RadomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let chosen = originals[0].items.results[RadomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeatureData(chosenInfo);

      }

      loadAll();
    },[]
  )

  useEffect(()=>{
    const scroolListener = () => {
        if(window.scrollY > 30){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scroolListener);

    return () => {
      window.removeEventListener('scrool', scroolListener);
    }
  },[])

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {
        featuredata && < FeatureMovie item={featuredata} />
      }
      <section className='lists'>
        {
          movieList.map( (item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

      <footer>
        Desenvolvido com ReactJs, por <a href="https://github.com/davicruzof" style={{textDecoration: "none", color: '#FF9717', fontSize: 18}}>Davi Cruz</a><br />
        Todos os direitos de imagens Netflix <br />
        Dados obtidos do Tmdb.org
      </footer>
    </div>
  )
}