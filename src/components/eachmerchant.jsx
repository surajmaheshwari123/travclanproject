 import React from 'react';
function  EachMerchant(props) {
 console.log(props.location.state)
  return (  
<div>
    <h2>Customer Bid</h2>
{props.location.state.merchant.bids.map(x=>(

<div class="card" style={{ marginBottom:20}}>
  <div class="container">
    <h4><b>Amount:{x.amount}</b></h4>
    <p>Title:{x.carTitle}</p>
    <p>Created:{x.created}</p>
    <p>Id:{x.id}</p>    
  </div>
</div>
)

)}
</div>

  
  );
}

export default   EachMerchant;
