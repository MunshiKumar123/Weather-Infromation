import Style from './Style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from './Weather';
const App = () => {



    return (


        <>

            <div class="container mt-5">

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body bg-secondary text-white">
                                <h5 class="card-title">           <Weather />
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App;