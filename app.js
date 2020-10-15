
const desc = 'I just learned how to create a React node!';
const myTitleId = 'main-title';
const name= 'Tyler';


{/* a simple header */}
const header = (
    <header>
        <h1 id={myTitleId}>{name}'s first React Element</h1>
        <p className='main-desc'>{desc}</p>
        <input value = {10 * 20 + ' ' + name}></input>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);