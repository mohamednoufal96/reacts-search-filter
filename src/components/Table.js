import React from "react";

const Table = ({ data }) => {
    const style = { width: "100%" };
    return (
        <div className="table">
            <table style={style}>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
                {data.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Table;
