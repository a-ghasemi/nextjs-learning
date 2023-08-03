import Header from './header.jsx';

const app = document.getElementById('app');

function Homepage() {
    return(
        <div>
            <Header />
        </div>
    );
}

ReactDOM.render(<Homepage />, app);