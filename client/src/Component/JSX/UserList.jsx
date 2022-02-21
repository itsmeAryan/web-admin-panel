import React, {useEffect} from 'react';
import "../Css/UserList.css"
import {DataGrid} from "@material-ui/data-grid"
import {DeleteOutline as Delete} from "@material-ui/icons"
import {Link} from "react-router-dom"
import { User as Products,DeleteUser as DeleteProduct} from "../../Redux/ApiCall"
import {useDispatch,useSelector} from "react-redux"
function UserList() {
  const Dis=useDispatch();
  
  const pro=useSelector(state=>state.products.products)
  useEffect(()=>{
    Products(Dis);
    
  },[Dis,pro.length]);
  const DleteProduct=(e)=>{
    console.log(e,'delete');
    DeleteProduct(Dis,e)
  }
  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'user', headerName: 'user name', width: 200,renderCell:(params)=>{
        return <div className='UserListUser'>
            {params.row.user}
        </div>
    } },
    { field: 'email', headerName: 'email', width: 190 },
    
    {
      field: 'isAdmin',
      headerName: 'Admin',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'edit',
        headerName: 'Action',
        width: 150,
        renderCell:(params)=>{
            return (
            <>
            <Link to={`/dashboard/users/edit/${params.row._id}`}>
            <button className='UserListEdit'>Edit</button>

            </Link>
<Delete className='UserListDelete' onClick={()=>DleteProduct(params.row._id)} />
            </>
                )
        }
      },
    
  ];


  
  
      
      
      
  return <div className='userList'>
 <DataGrid
        rows={pro}
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection disableSelectionOnClick
      />
  </div>;
}

export default UserList;
