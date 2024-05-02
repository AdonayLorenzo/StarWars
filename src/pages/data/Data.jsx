import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Data.css';
import { useEffect, useState } from "react";
import moviesData from "../../firebase/movie-data";

const Data = () => {
    const [movies, setMovies] = useState([]);
    const getAllMovies = () => (
        moviesData.getAllMovies().then((items) => {
            let auxMovies = [];

            items.forEach((item) => {
                const key = item.key;
                const data = item.val();
                


                auxMovies.push({
                    name: data.name,
                    benefit: data.benefit
                });
            });
            setMovies([...auxMovies]);
        }

        )
    )

    useEffect(() => {
        getAllMovies();

    }, [])
    return (
        <>
            <Header />
            <h1 className='titleD'>DATA</h1>
            <div className='body'>
            <br />
            <br />
            <p>There is information about the films and the benefit of each one of the movies</p>
            <br></br>
            <ul>
            {movies.map((m) => (
                <li>Name:{m.name} {'\t'} <li>Benefit:{m.benefit}</li><br></br></li>
            ))}
            </ul>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Data;