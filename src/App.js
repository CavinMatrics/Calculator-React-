import "./App.css";
import CustomButton from "./Component/CustomButton";
import Calculator from "./Component/Calculator";

function App() {
    // const [value, setValue] = useState(60);

    return (
        <div className="App">
            <p className="text-[50px] my-[20px]">Calculator</p>
            <Calculator parentClass="md:w-[50%] w-full p-[10px] mx-auto h-[500px]"/>
        </div>
    );
}

export default App;
