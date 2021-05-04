import React from 'react'

const MovieItem = props => {
    const {Title:title, Year: year, Poster: poster, imdbID: imdbid, Type: type} = props;

     return(
             <div className="card movie">
                 <div className="card-image waves-effect waves-block waves-light">
                     {
                         poster === 'N/A'
                         ?(<img className="activator" src={`https://via.placeholder.com/300x420?text=${title}`}/>)
                         : <img src={poster}/>
                     }
                 </div>
                 <div className="card-content">
                     <span className="card-title activator grey-text text-darken-4">{title}</span>
                     <br/>
                     <p>{year} <span className="right">{type}</span></p>
                 </div>
             </div>
     )
}

export default MovieItem
