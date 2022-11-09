import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Checkout from "./component/Checkout"
import PaystackIntegration from "./component/PaystackIntegration"


export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaystackIntegration />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}


