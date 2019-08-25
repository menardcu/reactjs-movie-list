import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/movies';

class App extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20')
        .then(res => res.json())
        .then( result => {
            for( let i = 0; i < result.data.length; i++) {
                let rd = result.data[i]
                console.log(rd.data)
                if( rd.type === "Multi-Title-Manual-Curation" ) {
                    this.setState({ movies: [...this.state.movies, rd.data] })
                }
            }
        })
        .catch(console.log)
    }

    render () {
        return (
            <Movies movies={this.state.movies} />
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
