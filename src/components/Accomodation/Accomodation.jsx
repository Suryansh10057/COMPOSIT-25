import React, { useEffect, useState } from "react";
import "./accomodation.css";
import BaseUrl from "../../const";

const Accomodation = () => {
  const [days, setDays] = useState(1);
  const [amount, setAmount] = useState(200);
  const [payment, setPayment] = useState(false);
  const [btn, setBtn] = useState("Submit");
  const [text, setText] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [qrlink, setQrLink] = useState("https://res.cloudinary.com/dmdhj9jdq/image/upload/v1741155709/WhatsApp_Image_2025-03-05_at_11.37.20_AM_f7dah0.jpg");


  const handleDaysChange = (e) => {
    const selectedDays = parseInt(e.target.value);
    if (selectedDays === 1) {
      setAmount(200);
      setDays(1)
      setQrLink("https://res.cloudinary.com/dmdhj9jdq/image/upload/v1741155709/WhatsApp_Image_2025-03-05_at_11.37.20_AM_f7dah0.jpg");
    } else if (selectedDays === 2) {
      setAmount(400);
      setDays(2)
      setQrLink("https://res.cloudinary.com/dmdhj9jdq/image/upload/v1741155709/WhatsApp_Image_2025-03-05_at_11.37.46_AM_ajisql.jpg");
    } else if (selectedDays === 3) {
      setAmount(500);
      setDays(3)
      setQrLink("https://res.cloudinary.com/dmdhj9jdq/image/upload/v1741155708/WhatsApp_Image_2025-03-05_at_11.38.05_AM_jgjjrc.jpg");
    }
  };


  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
  const token = JSON.parse(localStorage.getItem('COMPOSITuserToken'));
  // console.log(token)
  // console.log(userData)
  useEffect(() => {
    if (userData?.payment) {
      setPayment(true);
      setText("You have Successfully paid for the accommodation.");
    }
  }, [userData]); // Runs only when `userData` changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot) return alert("Please upload a payment screenshot.");
    setBtn("Submitting payment, please wait...")

    const formData = new FormData();
 
    formData.append("file", screenshot);
    formData.append("upload_preset", "COMPOSIT_PAYMENT");
    formData.append("cloud_name", "dmdhj9jdq");

   const response =  await fetch("https://api.cloudinary.com/v1_1/dmdhj9jdq/image/upload",{
      method: "POST",
      body: formData
    })

    const uploadedImgUrl = await response.json();
    if (!uploadedImgUrl) {
      return (
        setText(
          "Something went wrong while uploading the payment screenshot. Please try again.")
      )
    }

    console.log(uploadedImgUrl)

    // console.log(screenshot)

       try {
      const response = await fetch(`${BaseUrl}/api/user/accommodation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
      days:days,
      screenshot: uploadedImgUrl.secure_url,
      UserId: userData._id,
      phone: userData.phone,
      name: userData.name,
      email: userData.email,
      token:token
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      console.log(data)
const recivedData = data.user
localStorage.setItem("COMPOSITuser", JSON.stringify(recivedData));
setText("Payment successflly submitted!, our team will reach you out within 24 hours to confirm your booking.");
setPayment(true)
        console.log(data)
      // alert(data.message);
    } catch (error) {
      console.log("Error:", error.message);
      setBtn("Submit")
      // alert("Something went wrong!");
    }
  };

  return (
    <div className="accommodation-container">
      <h2>Accommodation Portal</h2>
<p>We are excited to welcome you to IIT Kharagpur for COMPOSIT 2025. To ensure a smooth and hassle-free stay, please carefully read the accommodation guidelines and rules mentioned below.</p>
      <b>General Rules and Guidelines : </b>
      <ul className="charges-list Accorules-list">
        <li>Participants must carry a valid college ID card for verification during check-in</li>
        <li>Participants must adhere to the hostel rules and regulations. Any misconduct or violation may lead to cancellation of accommodation without a refund</li>
        <li>Alcohol, drugs, smoking, and any form of illegal activities are strictly prohibited inside the IIT Kharagpur campus. Violation of this rule will lead to strict disciplinary action</li>
        <li>Team COMPOSIT reserves the right to modify or cancel accommodation if any unforeseen circumstances arise</li>
        <li>Accomodation payment is non-refundable</li>
        <li>For any accommodation-related queries, please feel free to reach out to our team at [<a href="mailto:composit2025@gmail.com" target="_blank">composit2025@gmail.com</a> / 8767650199]</li>
      </ul>

{payment===false &&<>
      <p>Accommodation Details & Charges:
      </p>
      <ul className="charges-list">
        <li>1 Day: ₹200</li>
        <li>2 Days: ₹400</li>
        <li>3 Days: ₹500</li>
      </ul>

      <form onSubmit={handleSubmit} className="accommodation-form">

      {/* <label>Select Number of Days:</label>
      <select value={days} onChange={handleDaysChange}>
        <option value="" disabled >Select Number of Days</option>
        <option value={1}>1 Day - ₹200</option>
        <option value={2}>2 Days - ₹400</option>
        <option value={3}>3 Days - ₹500</option>
      </select> */}
      <label><b>Select the Number of Days :</b></label>
                                    <select name="gender" className="form-control" required onChange={handleDaysChange}>
                                        <option value="default">Please Select</option>
                                        <option value={1}>1 Day - ₹200</option>
        <option value={2}>2 Days - ₹400</option>
        <option value={3}>3 Days - ₹500</option>
                                    </select>


        <p className="amount-display">Total Amount: ₹{amount}</p>

        <img src={qrlink} className="qr-code" alt="" />
        <label>Upload Payment Screenshot:</label>
        {/* <a href="">click here to pay</a> */}
        <input type="file" accept="image/*" onChange={handleFileChange} required />

        <button type="submit">{btn}</button>
      </form>
        </>}

        <p className="amount-display">{text}</p>

    </div>
  );
};

export default Accomodation;
