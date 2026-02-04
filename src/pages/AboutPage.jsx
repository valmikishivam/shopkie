
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.png'
function AboutPage() {

 const members=[
    team1,team2,team3,team4,team5
 ]

    return (
        <div className='con-p'>
            <section className='flexbox'>
                <div className='flexcontent'>
                    <h1 className='heading'>Our Story</h1>
                    <p>Our journey began with a simple idea to make online shopping easy and reliable.</p><p>
                        We believe customers deserve quality products at fair prices.
                        Every product is carefully selected to meet our standards.
                        Transparency and trust guide everything we do.
                        We focus on creating a smooth and secure shopping experience.
                        Customer satisfaction is always our top priority.</p><p>
                        We continuously improve to serve our customers better.
                        We see our customers as long-term partners, not just buyers.
                        Innovation and reliability drive our growth.
                        Thank you for being a part of our journey.</p>
                </div>
                <div className='fleximage'>
                    <img src={team4} />
                </div>
            </section>
            <section className='flexbox'>
                <div style={{width:'340px'}}>
                    <h1 className='heading'>Our vision</h1>
                    <p>To become a trusted e-commerce platform known for reliability, innovation, and customer-first experiences, where people shop with confidence and ease.</p>
                </div>
                <div style={{width:'340px'}}>
                    <h1 className='heading'>Our Mission</h1>
                    <p>To deliver quality products at fair prices while providing a seamless, secure, and transparent shopping experience for every customer.</p>
                </div>
                <div style={{width:"340px"}} >
                    <h1 className='heading'>Our Goal</h1>
                    <p>Our goal is to continuously improve our services, expand our product range, and build long-term relationships by putting customer satisfaction at the center of everything we do.</p>
                </div>
            </section>
            <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',padding:'30px 20px', justifyContent:'center',alignItems:'center'}}>
                <h1>Our Team and Members</h1>
               {
                members.map((member)=>(
                    <div style={{width:'200px',height:'200px', overflow:'hidden',margin:'2px'}}>
                        <img src={member} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                ))
               }
            </section>
            <div style={{padding:'30px 20px'}}>
                <h1 style={{marginBottom:'30px'}}>What our customer's says</h1>
                <section style={{width:'100%',display:'flex',justifyContent:'space-between', overflowX:'scroll',scrollBehavior:'smooth',scrollbarWidth:'none'
                }}>
                    <div style={{width:'320px',flexShrink:0,lineHeight:1.4,padding:'10px',borderRadius:'5px'}}>
                        <b>⭐ Rahul S.</b>
                        <p>“Great quality products and fast delivery. The entire shopping experience was smooth and hassle-free.”</p>
                    </div>
                    <div style={{width:'320px',flexShrink:0,lineHeight:1.4,backgroundColor:'#edede9',padding:'10px',borderRadius:'5px'}} >
                        <b> ⭐ Priya M.</b>
                        <p>“I loved the pricing and the product quality. Customer support was helpful and responsive.”</p>
                    </div>
                    <div style={{width:'320px',flexShrink:0,lineHeight:1.4,padding:'10px',borderRadius:'5px'}}>
                        <b> ⭐ Amit K.</b>
                        <p>“Easy ordering, secure payment, and exactly what was shown on the website. Highly recommended!”</p>
                    </div>
                    <div style={{width:'320px',flexShrink:0,lineHeight:1.4,backgroundColor:'#edede9',padding:'10px',borderRadius:'5px'}}>
                        <b> ⭐ Sneha R.</b>
                        <p>“Reliable service and genuine products. I’ll definitely shop again.”</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutPage