import React, { useEffect, useState } from 'react';

let heighlightList = [
    { columnid: "Name", rowid: 6 },
    { columnid: "Surname", rowid: 1 },
    { columnid: "Sex", rowid: 5 },
    { columnid: "Sex", rowid: 2 },
    { columnid: "Name", rowid: 2 },
    { columnid: "Email", rowid: 1 },
    { columnid: "Phone", rowid: 2 },
    { columnid: "City", rowid: 3 },
    { columnid: "Name", rowid: 3 },
    { columnid: "Surname", rowid: 3 },
    { columnid: "Name", rowid: 2 },
    { columnid: "Email", rowid: 1 },
    { columnid: "Phone", rowid: 2 },
    { columnid: "City", rowid: 1 },
    { columnid: "Name", rowid: 4 },
    { columnid: "Surname", rowid: 5 },
]
const UserList = (props) => {

    let [hightlight, setHightlight] = useState({});
    let [count, setCount] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {

                if(count < heighlightList.length){
                    setCount(count+1);
                setHightlight(heighlightList[count]);
                }else{
                    setCount(0);
                }
            }, 1000);
            return () => {
              clearInterval(intervalId);
            };
          });
     
    
  return(
    <div className='container'>
         <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Sex</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
            </tr>
            {props.userlist.map((item, key) => {
                return (<tr rowid = {key}>
                    
                    <td columnid ={item.Name}
                     className={hightlight.rowid === key && hightlight.columnid === "Name" ? `highlightedBorder` : `borderTd`}
                    >{item.Name}</td>
                    <td columnid ={item.Surname}
                    className={hightlight.rowid === key && hightlight.columnid === "Surname" ? `highlightedBorder` : `borderTd`}
                    >{item.Surname}</td>
                    <td columnid ={item.Sex}
                    className={hightlight.rowid === key && hightlight.columnid === "Sex" ? `highlightedBorder` : `borderTd`}
                    >{item.Sex}</td>
                    <td columnid ={item.Email}
                    className={hightlight.rowid === key && hightlight.columnid === "Email" ? `highlightedBorder` : `borderTd`}
                    >{item.Email}</td>
                    <td columnid ={item.Phone}
                    className={hightlight.rowid === key && hightlight.columnid === "Phone" ? `highlightedBorder` : `borderTd`}
                    >{item.Phone}</td>
                    <td columnid ={item.City}
                    className={hightlight.rowid === key && hightlight.columnid === "City" ? `highlightedBorder` : `borderTd`}
                    >{item.City}</td>
                </tr>)
            })}
           
         </table>
    </div>
  )
}

export default UserList;