function Email(){
    return (
        <div
        style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh"
            }}
            >
        
        <div
        style={{
            width: "450px",
            height: "400px",
            padding: "20px",
            borderRadius:"12px",
            border: "1px solid lightgray"
        }}
        >
            <p>Work Email</p>
            {/*creating an input box to display the Email*/}
            <input
            type="email"
            placeholder="name@company.com"
            style={{
                width: "400px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid lightgray"
            }}
            />
            <p style={{marginTop: "20px"}}>Password</p>
            <input
            type="password"
            /*will change this after I get assets*/
            placeholder="Enter your password"
            style={{
                width: "400px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid lightgray"
            }}
            />
            
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
            }}
            >
            <div>
            <input
            type="checkbox"
            style={{ marginRight: "8px" }}
            />
            Remember me
            </div>
            <p>Forgot Password?</p>
            </div>

            <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
            >
            <button
                style={{
                    width: "400px",
                    padding: "10px",
                    marginTop: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#FF6600",
                    color: "white"

                }}
                >
                Sign In
            </button>
            </div>
        </div>
        </div>
    );
}
export default Email;