import { useState } from 'react'

const Payment = () => {
  
  const publicKey = "pk_your_public_key_here"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

}
<div className="checkout-form">
  <div className="checkout-field">
    <label>Name</label>
    <input
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <PaystackButton className="paystack-button" {...componentProps} />
</div>


export default Payment