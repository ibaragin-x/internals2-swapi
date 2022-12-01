import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container, Dimmer, Grid, GridRow, Loader} from "semantic-ui-react";
import Home from "./components/Home";
import Films from "./components/Films";
import SearchBar from "./components/SearchBar";

function App() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
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
                        <SearchBar/>
                    </Grid.Row>
                </Grid>
                {loading ? (
                    <Dimmer active inverted>
                        <Loader inverted> Loading... </Loader>
                    </Dimmer>
                ) : (
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/films' element={<Films data={films}/>}/>
                    </Routes>
                )}
            </Container>
        </Router>
    </>);
}

export default App;
