import img from "../assets/christina.jpg"
import { useState } from "react";
import "./app.css"



function ProfilePage() {
    const [name, setName] = useState("Christina");
    const [role, setRole] = useState("Editor");
    const [phone, setPhone] = useState(9876543211);
    const [mail, setMail] = useState("christina@gmail.com");
    const [company, setCompany] = useState("Freelance");
    const [address, setAddress] = useState("street2, kochi, kerala")

    return(
        <>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <h1 className="edit-title">EDIT<br />CONTENT</h1>
              </div>
              <div className="image-section">
                <img 
                  src={img} 
                  alt="Christina Profile" 
                  className="profile-img"
                />
                <div className="name-badge">
                  <h2>{name}</h2>
                  <h4>{role}</h4>
                </div>
              </div>
              <div className="card-footer">
                <div className="contact-info">
                  <p>{phone}</p>
                  <p>{mail}</p>
                  <p>{company}</p>
                  <p>{address}</p>
                </div>
                <div className="qr-placeholder">
                  <div >qr </div>
                </div>
              </div>
            </div>
          </div>        
        </>
    );

}

export default ProfilePage