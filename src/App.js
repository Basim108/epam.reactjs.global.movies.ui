import 'bootstrap/dist/css/bootstrap.min.css';
import styles  from './App.module.css';
import Header  from "./components/Header/Header";
import Counter from "./components/Counter/Counter";

function App() {
    return (
        <div className={styles.App}>
            <Counter initialValue={0}/>
            <Header />
        </div>
    )
}

export default App;
