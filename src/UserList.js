import React, { useEffect, useState } from 'react';


const UserList = (props) => {
    
      const dataToHeightlight = [
        { columnid: "Name", rowid: Math.floor((Math.random() * 10) ), borderColor: "Tomato" },
        { columnid: "Surname", rowid: Math.floor((Math.random() * 10) ), borderColor: "blue" },
        { columnid: "Sex", rowid: Math.floor((Math.random() * 10) ), borderColor: "#900C3F" },
        { columnid: "Phone", rowid: Math.floor((Math.random() * 10) ), borderColor: "DodgerBlue" },
        { columnid: "City", rowid: Math.floor((Math.random() * 10) ), borderColor: "Red" }
      ];

      const Headers = ["Serial", "Name", "Surname", "Sex", "E-Mail", "Phone", "City"];

      let [hightlight, setHightlight] = useState(dataToHeightlight);

        useEffect(() => {
            const intervalId = setInterval(() => {
                 setHightlight( [...dataToHeightlight] )
            }, 1000);
            return () => {
              clearInterval(intervalId);
            };
          });

        const checkHieghlight = (item, columnid, rowid) =>{
             let filteredData =  hightlight.filter((data)=> data.rowid === rowid && data.columnid === columnid )
                if(filteredData.length>0){
                    return filteredData[0].borderColor
                }
        }
        const createtabledata = () =>{
            return props.userlist.map((item, key) => {
                     let objkey = Object.keys(item);
                                  return <tr>
                                    {objkey.map((keys) => {
                                       if(checkHieghlight(item, keys, item.id)){
                                            return <td style={{ border: `3px solid ${checkHieghlight(item, keys, item.id)}` }}> {item[keys]} </td> 
                                        }else{
                                            return <td> {item[keys]} </td> 
                                        }}
                              )}
                            </tr>
                        })   
                    }
        const createHeaders = () =>
                Headers.map((header) =>{
                    return <th>
                         {header}
                    </th>
               })
    
                return(
                    <div className='container'>
                        <table>
                            <tr>
                            {createHeaders()}
                            </tr> 
                            {createtabledata()}
                        </table>
                    </div>
                )
}

      export default UserList;