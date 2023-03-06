import React, { useEffect, useState } from 'react';

let heighlightList = [
    { columnid: "Name", rowid: 6, borderColor: "#00ff00" },
    { columnid: "Surname", rowid: 1, borderColor: "#0000ff" },
    { columnid: "Sex", rowid: 5, borderColor: "#0000ff" },
    { columnid: "Sex", rowid: 2, borderColor: "orange" },
    { columnid: "Name", rowid: 2, borderColor: "orange" },
    { columnid: "Email", rowid: 1, borderColor: "#00ff00" },
    { columnid: "Phone", rowid: 2, borderColor: "#0110ff" },
    { columnid: "City", rowid: 3, borderColor: "#d11dff" },
    { columnid: "Name", rowid: 3, borderColor: "#d11dff"},
    { columnid: "Surname", rowid: 3 , borderColor: "#d11dff"},
    { columnid: "Name", rowid: 2, borderColor: "orange"},
    { columnid: "Email", rowid: 1, borderColor: "#0000ff"  },
    { columnid: "Phone", rowid: 2, borderColor: "orange" },
    { columnid: "City", rowid: 1, borderColor: "#0000ff" },
    { columnid: "Name", rowid: 4, borderColor: "#ddd000"},
    { columnid: "Surname", rowid: 5, borderColor: "#0000ff"  },
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
                     style={hightlight.rowid === key && hightlight.columnid === "Name" ? { border: `3px solid ${hightlight.borderColor}` }: {"border-Color":'grey'}}
                    >{item.Name}</td>
                    <td columnid ={item.Surname}
                    style={hightlight.rowid === key && hightlight.columnid === "Surname" ? { border: `3px solid ${hightlight.borderColor}` } : {"border-Color":'grey'}}
                    >{item.Surname}</td>
                    <td columnid ={item.Sex}
                    style={hightlight.rowid === key && hightlight.columnid === "Sex" ? { border: `3px solid ${hightlight.borderColor}` } : {"border-Color":'grey'}}

                    >{item.Sex}</td>
                    <td columnid ={item.Email}
                    style={hightlight.rowid === key && hightlight.columnid === "Email" ? { border: `3px solid ${hightlight.borderColor}` } : {"border-Color":'grey'}}

                    >{item.Email}</td>
                    <td columnid ={item.Phone}
                    style={hightlight.rowid === key && hightlight.columnid === "Phone" ? { border: `3px solid ${hightlight.borderColor}` } : {"border-Color":'grey'}}

                    >{item.Phone}</td>
                    <td columnid ={item.City}
                    style={hightlight.rowid === key && hightlight.columnid === "City" ? { border: `3px solid ${hightlight.borderColor}` } : {"border-Color":'grey'}}

                    >{item.City}</td>
                </tr>)
            })}
           
         </table>
    </div>
  )
}

export default UserList;