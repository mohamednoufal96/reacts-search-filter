import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { Users } from "./users";

function App() {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(input);
    };
    const style = { width: "400px", padding: "10px" };

    // const searchUsers = (data) => {
    //     return (
    //         data.filter((item) => item.first_name.toLowerCase().includes(input.toLowerCase())) ||
    //         data.filter((item) => item.last_name.toLowerCase().includes(input.toLowerCase())) ||
    //         data.filter((item) => item.email.toLowerCase().includes(input.toLowerCase()))
    //     );
    // };

    const keys = ["first_name", "last_name", "email", "gender"];
    const searchUsers = (data) => {
        return data.filter((user) => keys.some((key) => user[key].toLowerCase().includes(input.toLowerCase())));
    };

    return (
        <div className="App">
            <input type="text" style={style} value={input} onChange={handleChange} placeholder="search" />

            <Table data={searchUsers(Users)} />

            {/* <ul>
                {Users.filter((user) => user.first_name.toLowerCase().includes(input)).map((user) => (
                    <li key={user.id} className="userName">
                        {user.first_name}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default App;
