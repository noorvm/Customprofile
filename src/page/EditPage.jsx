import "./app.css"
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function EditPage({profiles, setProfiles}){

    const navigate = useNavigate()

    const { id } = useParams();
    const user = profiles.find((user) => user.id === Number(id));

    const [form, setForm] = useState(
        user ? { ...user } : null
        );

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
    }


    function handleSave(e) {
        e.preventDefault();

        setProfiles((prevProfiles) =>
            prevProfiles.map((item) =>
                item.id === Number(id)
                ? { ...item, ...form }
                : item
            )
        );
    navigate("/");
  }

  return (
    <div className="edit-container">

      <h2>Edit Profile</h2>

      <form onSubmit={handleSave}>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          name="mail"
          value={form.mail}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button className="edit-btn" type="submit">
          Save Changes
        </button>

        <button
          className="editCan-btn"
          type="button"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>

      </form>

    </div>
    )
}

export default EditPage;