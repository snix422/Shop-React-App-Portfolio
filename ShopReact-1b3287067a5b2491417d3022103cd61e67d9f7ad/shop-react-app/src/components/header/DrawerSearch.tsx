import { Drawer, IconButton, InputBase, Paper } from "@mui/material"
import React, { SetStateAction } from "react"
import { useHandleSearchChange } from "../../hooks/useHandleSearchChange"
import SearchIcon from '@mui/icons-material/Search';


interface DrawerSearchProps {
    isOpen:boolean,
    onClose: React.Dispatch<SetStateAction<boolean>>,
}

const DrawerSearch : React.FC<DrawerSearchProps> = ({isOpen,onClose}) => {
    const {handleInputChange} = useHandleSearchChange();
    return (
        <Drawer
          anchor="top"
          open={isOpen}
          onClose={() => onClose(false)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80vw'
          }}
        >
          <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 400,
                height: 80,
                margin: 'auto',
                backgroundColor: '#ffffff', // White background
                boxShadow: '0px 4px 10px rgba(0,0,0,0.15)', // Slightly darker shadow
                borderRadius: '8px', // Rounded corners
                border: '1px solid #ddd', // Light gray border for better separation
              }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                backgroundColor: '#f0f0f0', // Light gray background
                borderRadius: '4px', // Rounded corners
                padding: '4px 8px', // Padding inside the input
                border: '1px solid #ccc', // Light gray border
                boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.1)', // Inner shadow for input
                '&:focus': {
                  borderColor: '#007bff', // Change border color on focus
                  outline: 'none', // Remove default outline
                },
              }}
              placeholder="Wyszukaj produkt"
              onChange={handleInputChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Drawer>
      );
}

export default DrawerSearch