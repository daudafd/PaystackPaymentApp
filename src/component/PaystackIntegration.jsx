import {React, useState} from 'react'
import PayStatckPop from '@paystack/inline-js'
import { BsSearch } from "react-icons/bs";
// import { PaystackButton } from "react-paystack"


const PaystackIntegration = () => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  
  const paywithpaystack = (e) => {
    e.preventDefault()
    const paystack = new PayStatckPop
    paystack.newTransaction({
      key:"pk_test_2e511fd2fd5ccbf4f54a1d85b0217526c2ad6eff",
      amount:amount * 100,
      name,
      email,
      phone,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setName("")
        setAmount()
        setEmail("")
        setPhone("")
      },
      onCancel(){
        alert("You can cancelled the transaction")
      }
    })
  }

  return (
      <div className="w3-container w3-row">
          <div class="w3-bar w3-light-grey">
        <a href="#" className="w3-bar-item w3-button">Home</a>
        <a href="#" className="w3-bar-item w3-button active">Make Payment</a>
        <a href="#" className="w3-bar-item w3-button">About</a>
        <input type="text" className="w3-bar-item w3-input" placeholder="Search.."/>
        <a href="#" className="w3-bar-item w3-button w3-blue"><BsSearch/></a>
     </div>
    
  
      <div className="w3-center w3-blue">
        <h3>Make Payment</h3>
      </div>
      <div className="w3-container w3-third"></div>
       <div className="w3-container w3-third">
      <div className="w3-container w3-card-4">
        <div></div>
          <form id="paymentForm" className=" ">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="w3-input" id="name" />
          </div>
             <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="text" value={amount} onChange={(e) =>setAmount(e.target.value)} className="w3-input" id="amount" />
          </div>
             <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="w3-input" id="email-address" />
          </div>
             <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" value={phone} onChange={(e) =>setPhone(e.target.value)} className="w3-input" id="phone" />
          </div>
            <div>
              <button className="w3-btn w3-block w3-blue" onClick={paywithpaystack} type="submit">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
     </div>
  )
  
}

export default PaystackIntegration