import React, { useContext } from "react";

// ------------------Mui Avtar

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//

import { Link } from "react-router-dom";
import { AdminContext } from "../../Context/AdminContext/AdminContext";

function Admin({ user }) {
  const { logout } = useContext(AdminContext);

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
      <div className="bg-transparent">
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://i.postimg.cc/d0p1ZKPT/7074311-3551739.jpg"
            />
            <h1 className="text-sm md:text-xl">{user.name}</h1>
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
          {/* <MenuItem onClick={handleCloseUserMenu}>
            <Link to={"/Profile"}>
              {" "}
              <Typography textAlign="center">Profile</Typography>
            </Link>
          </MenuItem> */}
          <MenuItem onClick={handleCloseUserMenu}>
            <Link to={"/Account"}>
              {" "}
              <Typography textAlign="center">Account</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={logout}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Admin;
