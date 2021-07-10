import './App.css';
import Pagination from './components/pagination';
import React,{useEffect,useState} from 'react';
import axios from  'axios';
import _ from 'lodash';
import { paginate } from './utils/paginate';
import MerchantList from './components/merchantlist'; 
function App() {
  const pageSize=5;
  const [merchantArray,setMerchantArray]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [sortColumn,setSortColumn]=useState({path:'firstname',order:'asc'})
  useEffect(() => {     
var config = {
  method: 'get',
  url: 'https://intense-tor-76305.herokuapp.com/merchants',
};

axios(config)
.then(function  (response) {
  var merchantArr=[]
  response.data.map(x=>{
    merchantArr=[...merchantArr,{...x,bidMinTog:false,bidMin:x.bids.reduce((accObj, currentObj)=> accObj.amount < currentObj.amount ? accObj : currentObj, 1).amount,bidMax:x.bids.reduce((accObj, currentObj)=> accObj.amount > currentObj.amount ? accObj : currentObj, 1).amount}]
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
const handleSort = (sortColumn) => {
  setSortColumn(sortColumn)
};
const sorted = _.orderBy(merchantArray, [sortColumn.path], [sortColumn.order]);

const merchants = paginate(sorted, currentPage, pageSize);

  return (    
    <>
      <MerchantList
             merchants={merchants}
            sortColumn={sortColumn}
            onSort={handleSort}
          />
         <Pagination
            itemsCount={merchantArray.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
    </>
  );
}

export default App;
