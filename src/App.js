import './App.css';
import Pagination from './components/pagination';
import React,{useEffect,useState} from 'react';
import axios from  'axios';
function App() {
  const [merchantArray,setMerchantArray]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  useEffect(() => {     
var config = {
  method: 'get',
  url: 'https://intense-tor-76305.herokuapp.com/merchants',
};

axios(config)
.then(function  (response) {
  var merchantArr=[]
  response.data.map(x=>{
    merchantArr=[...merchantArr,{...x,checked:false,bidMax:x.bids.reduce((accObj, currentObj)=> accObj.amount > currentObj.amount ? accObj : currentObj, 1).amount}]
  })
 setMerchantArray(merchantArr);
})
.catch(function (error) {
  console.log(error);
});
},[]);
const handlePageChange = (page) => {
  setCurrentPage(page)
};
if (merchantArray.length===0) return null
console.log(merchantArray)
//  console.log(merchantArray[0].bids.reduce((accObj, currentObj) =>
//  accObj.x > currentObj.x ? accObj : currentObj, 1
// ).x)
  return (
    
    <>
         <Pagination
            itemsCount={merchantArray.length}
            pageSize={4}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
    </>
  );
}

export default App;
