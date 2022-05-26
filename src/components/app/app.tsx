import Header from '../header/header';
import SortBat from '../sortBar/sortBat';
import MovieList from '../movieList/movieList';
import ErrorBoundary from '../errorBoundry/errorBoundry';
import Footer from '../footer/footer';
import { data } from './movieListMock';
import styles from './app.module.scss';

const App = (): JSX.Element => {

    return (
        <div className={styles.app}>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>
            <ErrorBoundary>
                <SortBat />
            </ErrorBoundary>
            <ErrorBoundary>
                <MovieList data={data}/>
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default App;