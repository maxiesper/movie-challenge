import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get} from "../utils/httpClient";
import styles from "./MovieDetails.module.css";
import {Spinner} from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";


export function MovieDetails(){

    const{movieId} = useParams();
    const[isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

   

    useEffect(() =>{
        setIsLoading(true);

        get ("/movie/" + movieId).then((data) =>{
            
            setMovie(data);
            setIsLoading(false);
        }); 
    },[movieId]);

    if (isLoading){
        return <Spinner/>;
    }

    if (!movie){
        return null;
    }
    
    const imageUrl= getMovieImg (movie.poster_path, 500);

    return (
    <div className={styles.detailsContainer}>
        <img className={styles.col + " "+ styles.movieImage} 
        src={imageUrl} 
        alt={movie.title}/>
        <div className={styles.col + " "+ styles.MovieDetails}>
        <p><strong>Title:</strong> {movie.title}</p> 
        <p><strong>Genres:</strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> <meter min="0" max="100" optimum="100" low="40" high="70" value={movie.vote_average * 10}></meter> </p>
        <p>IMDB RATING</p>
        <p className="rmdb-score">{movie.vote_average}</p> 
        </div>
    </div>
    );
};