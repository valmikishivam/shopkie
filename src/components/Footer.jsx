
function Footer() {
  return (
    <footer style={{background:'#fff',padding:'1.4rem 1rem',borderTop:'1px solid gray'}}>
        <h4 style={{padding:'0.7rem'}}>SHOPKIE</h4>
       <section style={{display:'grid' ,gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px 10px',justifyContent:'space-between',alignItems:'start', padding:'0.7rem'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'0.4rem 0'}}>
          <b>ReachUs</b>
          <p style={{ WebkitLineClamp:3,lineHeight:1.8}}>Rz-14, Street 21 Near shopkie metro, Shopkie Mall</p>
          <h5>Pincode- 5173--</h5>
          <h5>+91 72488 25 - - -</h5>
          <h5>Shopkie@mail.com</h5>
        </div >
          <div style={{display:'flex',flexDirection:'column',gap:'0.4rem 0'}} >
            <b>ACCOUNT</b>
            <h5>Profile</h5>
            <h5>Account Setting</h5>
            <h5>Affilate Program</h5>
            <h5>Orders</h5>
          </div>
         <div style={{display:'flex',flexDirection:'column',gap:'0.4rem 0'}}>
          <b>QUICK LINKS</b>
          <h5>Signup</h5>
          <h5>Login</h5>
          <h5>About us</h5>
          <h5>My cart</h5>
          <h5>Contract</h5>
          <h5>Shop</h5>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.4rem 0'}}>
          <b>SUPPORT</b>
          <h5>Help</h5>
          <h5>FAQs</h5>
          <h5>shipping</h5>
          <h5>Returns</h5>
          <h5>Terms</h5>
          <h5>Privicy</h5>
        </div>
       
       </section>
       <p style={{textAlign:'center',padding:'0.7rem',borderTop:'1px solid gray'}}> copyright &copy; Shopkie { new Date().getFullYear()} | all rights reserved </p>
    </footer>
  )
}

export default Footer