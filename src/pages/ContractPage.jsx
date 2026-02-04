import { Link } from 'react-router-dom'
import '../App.css'

function ContractPage() {
  return (
    <div className='side-p'>
      <div className='contractform'>
        <h2 style={{ textAlign: "center" }}>Get in Touch</h2>
        <form className='contractformbody'>
          <div>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Mail' />


            <textarea rows="10" placeholder='Your Message For Us'></textarea>
            <button className='contractbtn'>Submit</button></div>
        </form>
      </div>
      <div className='socialicons con-p'>
        <h2 style={{textAlign:"center"}}>Social icons</h2>
        <div>
          <Link to={'#'} title='instagram'> ◙ </Link>
          <Link to={'#'} title='linkedin'> 𝐢𝐧 </Link>
          <Link to={'#'}title='facebook'> f </Link>
          <Link to={'#'} title='twitter'> 𝕏 </Link>
        </div>
      </div>
    </div>
  )
}

export default ContractPage