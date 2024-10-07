import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div>
                <h1>SignUp Page</h1>
                <div className="route-container">
                    <div>
                        <Link to='/login'>Back To Login</Link>
                    </div>
                    <div>
                        <Link to='/'>Back To Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
