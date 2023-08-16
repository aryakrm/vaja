import React from 'react';
import './Sec1.scss'
import WhatshotIcon from '@mui/icons-material/Whatshot';


function Sec1() {
  return (
    <section className='Sec1'>
        <div className='left'>
          <h1>Approximate Analysis Results</h1>
        <table border='1'>
<tbody>
<tr>
<td style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white'}} >Product Items</td>
<td style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white'}}>For 1000 gr Average Values</td>
</tr>
<tr>
<td>Carbon</td>
<td>78%</td>
</tr>
<tr>
<td>Ash</td>
<td>14%</td>
</tr>
<tr>
<td>Volatile Matter</td>
<td>8%</td>
</tr>
<tr>
<td>Damp</td>
<td>3%</td>
</tr>
<tr>
<td>Calorie Value</td>
<td>7500 Cal</td>
</tr>
</tbody>
</table>
        </div>
        <div className='right' > 
            <h1>Product Details</h1>
        <ul>
            <li> <WhatshotIcon/> Made entirely from sawdust powder</li>
            <li> <WhatshotIcon/> It has less ash and higher temperature than similar products</li>
            <li> <WhatshotIcon/> 100% natural and chemical free</li>
            <li> <WhatshotIcon/> Suitable for indoor and outdoor places</li>
            <li> <WhatshotIcon/> High and long-term direct heat</li>
            <li> <WhatshotIcon/> Burns clean without sparks</li>
            <li> <WhatshotIcon/> Minimum burning time is 3 hours</li>
            <li> <WhatshotIcon/> Does not create smoke and does not smell</li>
        </ul></div>
       
    </section>
  )
}

export default Sec1
