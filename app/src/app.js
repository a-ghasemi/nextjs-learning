import Header from './src/header.js';

const app = document.getElementById('app');

function Homepage() {
    return(
        <div>
            <Header />
        </div>
    )
}

ReactDOM.render(<Homepage />, app);