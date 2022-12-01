import React from "react";
import {Card, CardHeader, Grid} from "semantic-ui-react";

export default function Films({data}) {
    return (<>
        <h1>Films</h1>
        <Grid columns={4}>
            {data.map((films, i) => {
                return (<Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <CardHeader>
                                    {films.title}
                                </CardHeader>
                                <Card.Description>
                                    <strong>Episode ID:</strong>
                                    <p>{films.episode_id}</p>
                                    <strong>Crawl:</strong>
                                    <p>{films.opening_crawl}</p>
                                    <strong>Director:</strong>
                                    <p>{films.director}</p>
                                    <strong>Producer:</strong>
                                    <p>{films.Producer}</p>
                                    <strong>Release Date</strong>
                                    <p>{films.release_date}</p>
                                    <strong>Characters:</strong>
                                    <p>{films.characters}</p>
                                    <strong>Planets:</strong>
                                    <p>{films.planets}</p>
                                    <strong>Starships:</strong>
                                    <p>{films.starships}</p>
                                    <strong>Vehicles:</strong>
                                    <p>{films.vehicles}</p>
                                    <strong>Species:</strong>
                                    <p>{films.species}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>)
}