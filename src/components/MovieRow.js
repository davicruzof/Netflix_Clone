import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({title,items}) => {

    const [scroolX, setScroolX] = useState(0);

    const handleLeftArrow = () => {
        let x = scroolX + Math.round(window.innerWidth/ 2);
        if(x > 0) {
            x = 0;
        }

        setScroolX(x);
    }

    const handleRigthArrow = () => {
        let x = 0;
        x = scroolX - Math.round(window.innerWidth/ 2);
        let listSize = 0;
        listSize = items.results.length * 150;
        if((window.innerWidth - listSize) > x / 2) {
            x = (window.innerWidth - listSize ) - 2050 ;
        }

        console.log(x);
        setScroolX(x);
    }

    return (
        <div className="movieRow" >
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--rigth" onClick={handleRigthArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className='movieRow--listarea'>

                <div className="movieRow--list" style={{
                    marginLeft: scroolX,
                    width: items.results.length * 1500,
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=> (
                        <div className="movieRow--item" key={key} >
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}  key={key}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}