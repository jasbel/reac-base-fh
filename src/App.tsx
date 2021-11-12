import Counter from "./components/Counter";
import CounterBy from "./components/CounterBy";
import CounterEffect from "./components/CounterEffect";

function App() {
    return (
        <>
            <h1>React</h1>
            <hr />
            <Counter initialValue={15} />
            <CounterBy /> 
            <CounterEffect /> 
            <CounterHook /> 
        </>
    );
}

export default App;
