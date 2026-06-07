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
            width: "500px",
            height: "500px",
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
                width: "300px",
                padding: "10px",
                borderRadius: "8px"
            }}
            />
        </div>
        </div>
    );
}
export default Email;