// import React from 'react';
// import './Dashboard.css'; 
// import HomeIcon from './icons/home.jpg'; 
// import CarIcon from './icons/car.svg'; 
// import HomeHeartIcon from './icons/house-with-heart.svg'; 
// import BusinessIcon from './icons/business.svg'; 
// import Swal from 'sweetalert2';
// import axios from 'axios';


// const Dashboard = ({ location }) => {

//   const handleStatus = () => {
//     let URL = "http://localhost:8080/loan";
//     axios.get(URL).then(response => {
//       response.body;
//     })
//   }
  
//   const handleLoanTypeClick = (loanType) => {
//     let URL = "http://localhost:8080/loan/save";
    
//     axios.post(URL, {
//       "customerId": Math.random() * 100,
//       "loanId": loanType,
//       "status": "pending"
//     })
//     .then(response => {
//       if (response.status === 201) {
//         // Show SweetAlert for successful loan application
//         Swal.fire({
//           icon: 'success',
//           title: 'Loan Application Successful',
//           text: 'Your loan application has been submitted successfully!',
//         });
//       } else {
//         // Handle other status codes if needed
//         console.log('Loan application failed:', response.data);
//       }
//     })
//     .catch(error => {
//       // Show SweetAlert for unsuccessful loan application
//       Swal.fire({
//         icon: 'error',
//         title: 'Loan Application Failed',
//         text: 'Unable to apply for the loan. Please try again later.',
//       });
//       console.error('Loan application failed:', error);
//     });
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Welcome to Loan Application</h1>
//       <div>
//         <button onClick={handleStatus}>Loan Status</button>
//       </div>
//       <div className="loan-types">
//         <div className="loan-type" onClick={() => handleLoanTypeClick("1")}>
//           <img src={HomeIcon} alt="Home Loan" className="loan-icon" />
//           <div className="loan-info">
//             <h2>Home Loan</h2>
//             <p>Interest Rate: 3.5%</p>
//             <p>Loan Limit: $500,000</p>
//           </div>
//         </div>
//         <div className="loan-type" onClick={() => handleLoanTypeClick("2")}>
//           <img src={CarIcon} alt="Auto Loan" className="loan-icon" />
//           <div className="loan-info">
//             <h2>Auto Loan</h2>
//             <p>Interest Rate: 4.2%</p>
//             <p>Loan Limit: $50,000</p>
//           </div>
//         </div>
//         <div className="loan-type" onClick={() => handleLoanTypeClick("3")}>
//           <img src={HomeHeartIcon} alt="Home Improvement Loan" className="loan-icon" />
//           <div className="loan-info">
//             <h2>Home Improvement Loan</h2>
//             <p>Interest Rate: 3.8%</p>
//             <p>Loan Limit: $100,000</p>
//           </div>
//         </div>
//         <div className="loan-type" onClick={() => handleLoanTypeClick("4")}>
//           <img src={BusinessIcon} alt="Business Loan" className="loan-icon" />
//           <div className="loan-info">
//             <h2>Business Loan</h2>
//             <p>Interest Rate: 5.0%</p>
//             <p>Loan Limit: $1,000,000</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import './Dashboard.css'; 
import HomeIcon from './icons/home.jpg'; 
import CarIcon from './icons/car.svg'; 
import HomeHeartIcon from './icons/house-with-heart.svg'; 
import BusinessIcon from './icons/business.svg'; 
import Swal from 'sweetalert2';
import axios from 'axios';

const Dashboard = () => {
  const [loanStatus, setLoanStatus] = useState([]);

  const handleStatus = () => {
    let URL = "http://localhost:8080/loan";
    axios.get(URL)
     .then(response => {
        if (response.status === 200) {
          setLoanStatus(response.body); // Save loan status data
          // Show SweetAlert with loan information in table format
          console.log(loanStatus)
          Swal.fire({
            title: 'Loan Status',
            html: (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>Customer Id</th>
                      <th>Loan Id</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    { loanStatus.map((loan, index) => (
                      <tr key={index}>
                        <td>{loan.applicationId}</td>
                        <td>{loan.customerId}</td>
                        <td>{loan.loanId}</td>
                        <td>{loan.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          });
        } else {
          console.log('Failed to fetch loan status:', response.data);
        }
      })
     .catch(error => {
        console.error('Failed to fetch loan status:', error);
      });
  };

  const handleLoanTypeClick = (loanType) => {
    let URL = "http://localhost:8080/loan/save";
    
    axios.post(URL, {
      "customerId": Math.random() * 100,
      "loanId": loanType,
      "status": "pending"
    })
    .then(response => {
      if (response.status === 201) {
        // Show SweetAlert for successful loan application
        Swal.fire({
          icon: 'success',
          title: 'Loan Application Successful',
          text: 'Your loan application has been submitted successfully!',
        });
      } else {
        // Handle other status codes if needed
        console.log('Loan application failed:', response.data);
      }
    })
    .catch(error => {
      // Show SweetAlert for unsuccessful loan application
      Swal.fire({
        icon: 'error',
        title: 'Loan Application Failed',
        text: 'Unable to apply for the loan. Please try again later.',
      });
      console.error('Loan application failed:', error);
    });
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Loan Application</h1>
      <div>
        <button onClick={handleStatus}>Loan Status</button>
      </div>
      <div className="loan-types">
        <div className="loan-type" onClick={() => handleLoanTypeClick("1")}>
          <img src={HomeIcon} alt="Home Loan" className="loan-icon" />
          <div className="loan-info">
            <h2>Home Loan</h2>
            <p>Interest Rate: 3.5%</p>
            <p>Loan Limit: $500,000</p>
          </div>
        </div>
        <div className="loan-type" onClick={() => handleLoanTypeClick("2")}>
          <img src={CarIcon} alt="Auto Loan" className="loan-icon" />
          <div className="loan-info">
            <h2>Auto Loan</h2>
            <p>Interest Rate: 4.2%</p>
            <p>Loan Limit: $50,000</p>
          </div>
        </div>
        <div className="loan-type" onClick={() => handleLoanTypeClick("3")}>
          <img src={HomeHeartIcon} alt="Home Improvement Loan" className="loan-icon" />
          <div className="loan-info">
            <h2>Home Improvement Loan</h2>
            <p>Interest Rate: 3.8%</p>
            <p>Loan Limit: $100,000</p>
          </div>
        </div>
        <div className="loan-type" onClick={() => handleLoanTypeClick("4")}>
          <img src={BusinessIcon} alt="Business Loan" className="loan-icon" />
          <div className="loan-info">
            <h2>Business Loan</h2>
            <p>Interest Rate: 5.0%</p>
            <p>Loan Limit: $1,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
