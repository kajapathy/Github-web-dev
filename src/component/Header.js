import logo from '../assests/jewel.png';
function Header() {
    const mainstyle ={
        backgroundColor : "black",
        display:"flex",
        height:"180px"
    }
  
  
    return (
        // <header>
        //     <h1>My Website</h1>
        //     <Navigation />
        // </header>
        <div style={mainstyle}>
        <img src={logo} width={210} height={210} paddingTop/>

         <h1 style={{color:"#F5BD02",fontSize:100,paddingLeft:"400px",textAlign:"center",paddingTop:"30px",fontFamily:"opensans-bold"}}>Kaju jewels</h1>
        </div>
    );
}
export default Header;