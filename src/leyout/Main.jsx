import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

export class Main extends React.Component {
    state = {
        movies: [],
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=8f8e826e&s=matrix')
        .then(res => res.json())
        .then(data => this.setState({movies: data.Search}))
    }
    render(){
        const { movies } = this.state
        return (
            <main className="container content">
                <Search/>
            {
                movies.length 
                ? (<Movies movies={movies}/>) 
                : <Preloader/>
            }
            </main>
        )
    }
}