
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers}</span>
        </header>
    );
}

class Counter extends React.Component {
    state = {
            score: 0
        };
        incrementScore() {
            this.setState( prevState => {
                return {
                score: prevState.score + 1
                }
            });
        }
        decrementScore = () => {             {/* you can also bind using arrow functions here */}
            this.setState( prevState => {
                return {
                score: prevState.score - 1
                }
            });
        }
    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
                <span className='counter-score'>{this.state.score}</span>
                <button className='counter-action increment' onClick={this.incrementScore.bind(this)}> + </button>
            </div>
            );
        }
}

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>
                <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class App extends React.Component{

    state = {
        players: [
            {name: 'Tyler',id: 1},
            {name: 'Jake',id: 2},
            {name: 'Kyle',id: 3},
            {name: 'Hink',id: 4},
            {name: 'Garrett',id: 5},
        ]
    };

    handleRemovePlayer = (id ) => {
        this.setState( prevState => {
            return {
            players: prevState.players.filter( p => p.id !== id)
            };
        });
    }

    render(){
        return(
            <div className='scoreboard'>
                <Header title='scoreboard' totalPlayers={this.state.players.length}/>
    
                {/* Player List Start */}
                {this.state.players.map( player =>
                    <Player 
                    name={player.name} 
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);