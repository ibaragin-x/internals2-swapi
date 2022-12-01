import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Dimmer, Grid, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import Films from "./components/Films";

function App() {
    const [filter, setFilter] = useState('');
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleChange = event => {
        setFilter(event.target.value);
        setFilms(films.map((movie) => {
            if (movie?.title?.toLowerCase().includes(filter?.toLowerCase())) {
                return movie;
            }
        }))
    };
    useEffect(() => {
        async function fetchFilms() {
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setFilms(data.results);
            setLoading(false);
        }

        fetchFilms();
    }, [])
    return (<>
        <Router>
            <Navbar/>
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <input
                            key="search-bar"
                            value={filter}
                            placeholder={"Search Films"}
                            onChange={handleChange}
                        />
                    </Grid.Row>
                </Grid>
                {loading ? (
                    <Dimmer active inverted>
                        <Loader inverted> Loading... </Loader>
                    </Dimmer>
                ) : (
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        {films.length > 0 ? (<Route exact path='/films' element={<Films data={films}/>}/>) :
                            (<div>Loading ...</div>)}
                    </Routes>
                )}
            </Container>
        </Router>
    </>);
}

export default App;