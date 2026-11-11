
import "./app.css"
import { QRCodeSVG } from "qrcode.react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Phone,
    Mail,
    Building2,
    MapPin
} from "lucide-react";
import { useState } from "react";

function ProfileCard({ profiles, setProfiles }) {

    const navigate = useNavigate()


    const { id } = useParams();
    const user = profiles.find((user) => user.id === Number(id));

    if (!user) {
        return <h2>Profile not found</h2>;
    }

    return (
        <div className="card-container">

            <div className="card">

                <div className="card-header">
                    <h1 className="edit-title">
                        EDIT<br />CONTENT
                    </h1>
                </div>

                <div className="image-section">
                    <img
                        src={user.image}
                        alt={user.name}
                        className="profile-img"
                    />

                    <div className="name-badge">
                        <h2>{user.name}</h2>
                        <h4>{user.role}</h4>
                    </div>
                </div>

                <div className="card-footer">

                    <div className="contact-info">
                        <p><Phone size={20} /> {user.phone}</p>
                        <p><Mail size={20} /> {user.mail}</p>
                        <p><Building2 size={20} /> {user.company}</p>
                        <p><MapPin size={20} /> {user.address}</p>
                    </div>

                    <div className="qr-placeholder">
                        <QRCodeSVG
                            value={user.name}
                            size={80}
                        />
                    </div>
                </div><br />
                <button className="edit-btn" onClick={()=>navigate(`/profile/${user.id}/edit`)}>✏️ Edit</button>

            </div>
        </div>
    );
}

export default ProfileCard;
