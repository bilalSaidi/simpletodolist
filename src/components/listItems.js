import React  from 'react';

const ListItems = (props) => {

    const {datas} = props ; 

    
    const dataList =  
        datas.length 
        ? 
        (
            datas.map(data => {
                    
                return  (
                    <tr  key={data.id} className="row" >
                        <td className="cell">{data.name}</td>
                        <td className="cell">{data.lastName}</td>
                        <td className="cell">{data.age}</td>
                        <td className="deleteData cell" onClick={() => props.deleteItem(data.id)}>&times;</td>
                    </tr>
                
                ) 
            
            
            })
        )
        : 
        (
            <tr className="row">
                <td className="cell" colSpan="4">there is no item to show </td>
                
            </tr>
        )
       
    

    
    

    return(
        <div className="wrapper">
            <table className="table">
                <thead >
                    <tr className="row header" >
                        <th className="cell">Name </th>
                        <th className="cell">last name</th>
                        <th className="cell">Age</th>
                        <th className="cell">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {dataList}
                
                </tbody>
             </table>
        </div>
    )
}


export default ListItems;