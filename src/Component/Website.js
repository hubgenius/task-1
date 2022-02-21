import React from 'react'
import {Navbar,Container,Nav,Button, NavItem} from  'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { display, textAlign } from '@mui/system';
import { Margin } from '@mui/icons-material';
const  Website =()=> {
  return (
    <>

        <Navbar bg="light" expand="lg">
    <Nav>
            
        <Card sx={{ maxWidth: '700px' }} style={{borderTop:'rigth'}}>
      <CardMedia
        component="img"
        // height="30px*30px"
        image="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA=="
        
        />
      </Card>
        </Nav>
  <Container >
    {/* <Navbar.Brand href="#"> Protfolio</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav 
        className="col-xl-10-col-lg-10 col-md-10"
        style={{ justifyContent:'center', textAlign:'center',fontSize:'30px' ,padding:'42px 10px'}}
        navbarScroll
      >
        

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Service">Service</Nav.Link>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/Page">Page</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        
       
     
       
      </Nav>
      <Nav>
      <Button variant="danger">
        Get Free Consultent
      </Button>

      </Nav>
     
       
     
    </Navbar.Collapse>
  </Container>
</Navbar>
{/* 
<Nav class='Q'>
<Nav>

    <Nav style={{color:'black' ,fontSize:'50'}}>
        GET EVERY SINGLE SOLUTIONS
    </Nav>
    
    <Nav style={{ color:'black',fontFamily:'PT Serif',  fontSize:'25px'}}>
       <br/> I'm Designer Haris F.Watson
    </Nav>
    <br/>
    
    <br/>
    <br/>

    </Nav>

<Nav style={{backgrounColor:'ligthgrey'}}> 

    <Button variant="danger" >
        Learn More
      </Button>
      <Button variant="outline-danger">
        Hire Me
      </Button>
</Nav> */}
{/* </Nav> */}

    </>
  )
}

export default Website