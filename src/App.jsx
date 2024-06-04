import './App.css';
import Employee from './components/Employee';

function App(){
    const showEmployee = true;
    return(
        <div className="App">
            {showEmployee ? (
                <>
                    <Employee />
                    <Employee />
                    <Employee />
                </>
            ) : (

                <p>You cannot see the employees.</p>
            )

            }
            
        </div>
    );
}

export default App;