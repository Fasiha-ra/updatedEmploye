import React, { useState, useRef, useEffect } from "react";
import { ProfileWrap } from "./UpdateProfile.styles";
import Icon from "../../../assets/authentication/profile-2.png";
import TextField from "../../TextField/TextField";
import Button from "../../Button/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
import { useAuth } from "../../../Context/AuthContext";

const UpdateProfile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "Sr. Analyst",
    corporateEmail: "",
    employeeId: "",
    personalEmail: "",
    phone: "",
    address: "",
    avatar: null,
    companyId: 1,
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (profileImage) {
        const imageData = new FormData();
        imageData.append("file", profileImage);
        const imgResponse = await axios.post(
          `${serverDomain}/upload`,
          imageData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("image", imgResponse);
        formData.avatar = imgResponse.data.fileUrl;
      }
      const res = await axios.put(
        `${serverDomain}/user/${currentUser}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);
      navigate("/dashboard");
      console.log("Form Data:", formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${serverDomain}/user/${currentUser}`);

        const user = res.data?.user;

        setFormData(user);
        console.log("res", res);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentUser]);

  return (
    <ProfileWrap>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <div className="profleHolder">
              <div className="profile">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <img
                  src={
                    profileImage
                      ? URL.createObjectURL(profileImage)
                      : formData?.avatar
                      ? `${serverDomain}${formData?.avatar}`
                      : Icon
                  }
                  alt="profile"
                  onClick={() => fileInputRef.current.click()}
                />
              </div>
              <div className="selectHolder">
                <label htmlFor="Designation">Designation *</label>
                <select
                  name="designation"
                  id="designation"
                  value={formData?.designation}
                  onChange={handleInputChange}
                >
                  <option value="Analyst 1">Sr. Analyst</option>
                  <option value="Analyst 2">Analyst 1</option>
                  <option value="Analyst 3">Analyst 2</option>
                  <option value="Analyst 4">Analyst 3</option>
                </select>
              </div>
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="Employee Id  *"
                name="employeeId"
                type="text"
                placeholder="ASDFGHJL1234567"
                value={formData?.employeeId}
                onChange={handleInputChange}
              />
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="Contact Number *"
                name="contactNumber"
                type="number"
                placeholder="8756349867"
                value={formData?.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="holder">
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="First Name *"
                name="firstName"
                type="text"
                placeholder="Mehra"
                value={formData?.firstName}
                onChange={handleInputChange}
              />
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="Last Name *"
                name="lastName"
                type="text"
                placeholder="Anish"
                value={formData?.lastName}
                onChange={handleInputChange}
              />
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="Corporate E-mail ID *"
                name="corporateEmail"
                type="email"
                placeholder="Aanishmehra@tcs.in"
                value={formData?.corporateEmail}
                onChange={handleInputChange}
              />
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="Personal E-mail ID *"
                name="personalEmail"
                type="email"
                placeholder="anishmehra85@gmail.com"
                value={formData?.personalEmail}
                onChange={handleInputChange}
              />
              <TextField
                parentClass="custom-input"
                className="input-field"
                label="address *"
                name="address"
                type="text"
                placeholder="Mumbai"
                value={formData?.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="btn">
            <Button width="172px" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </ProfileWrap>
  );
};

export default UpdateProfile;
