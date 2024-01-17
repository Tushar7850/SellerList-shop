import React from 'react'
// import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase.congif'
// ------------------Mui Avtar

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// 
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


function Admin({user}) {


  const Navigate=useNavigate()
  // 
    const logout =()=>{
      auth.signOut()
      toast.success('Logout sucees !');
      Navigate('/')
      
    }

    
  // ----------------Mui  Avtar ---------------
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    }; 



  return (
    <div>
        
      
      <div className='bg-transparent'>
          <Tooltip title="Open settings">
          
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
            <h1>{user.email}</h1>
              <Avatar alt="Remy Sharp" src="https://i.postimg.cc/d0p1ZKPT/7074311-3551739.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
           
            <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" >Profile</Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" >Account</Typography>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
              <Link to={'/dashboard'}>  <Typography textAlign="center" >Dashboard</Typography></Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={logout}>Logout</Typography>
              </MenuItem>

          </Menu>
        </div>
        
    </div>
  )
}

export default Admin
