import imgChristina from "../assets/christina.jpg"
import imgJohn from "../assets/John.png"
import imgJack from "../assets/Jack.png"
import { QRCodeSVG } from "qrcode.react";
import {
  Phone,
  Mail,
  Building2,
  MapPin,
} from "lucide-react";
import "./app.css"
import { useNavigate} from "react-router-dom";


function ProfilePage({profiles}) {

  const navigate = useNavigate();

    return(
        <>
        <div className="card-container">
        {profiles.map((user) => (
            <div className="card">
              {/* Header */}
              <div className="card-header">
                <h1 className="edit-title">EDIT<br />CONTENT</h1>
              </div>
              {/* Image */}
              <div className="image-section">
                <img 
                  src={user.image} 
                  alt="Christina Profile" 
                  className="profile-img"
                />
                <div className="name-badge">
                  <h2>{user.name}</h2>
                  <h4>{user.role}</h4>
                </div>
              </div>
              {/*Deatils*/}
              <div className="card-footer">
                <div className="contact-info">
                  <p> <Phone size={20} /> {user.phone}</p>
                  <p> <Mail size={20} />{user.mail}</p>
                  <p><Building2 size={20} />{user.company}</p>
                  <p><MapPin size={20} />{user.address}</p>
                </div>
                <div className="qr-placeholder">
                  <QRCodeSVG 
                    value={user.name}
                    size={80}
                  />
                </div>
              </div>
              <button onClick={()=>navigate(`/profile/${user.id}`)}>Card Deatils</button>
            </div>  
          ))}  
          </div> 
        </>
    );

}

export default ProfilePage