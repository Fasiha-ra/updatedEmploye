import React, { useState, useRef } from "react";
import { ProfileWrap } from "./Profile.styles";
import Icon from "../../assets/authentication/profile.png";
import TextField from "../TextField/TextField";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";
import { Box, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";
const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  corporateEmail: yup
    .string()
    .email("Invalid email")
    .required("Corporate Email is required"),
  employeeId: yup.string().required("Employee ID is required"),
  personalEmail: yup
    .string()
    .email("Invalid email")
    .required("Personal Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Contact Number is required"),
  address: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});

const UploadProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentUser } = useAuth();
  const { email } = location.state || {};
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      designation: "Sr. Analyst",
      corporateEmail: "",
      employeeId: "",
      personalEmail: email || "",
      phone: "",
      address: "",
      country: "",
      avatar: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
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

        values.avatar = imgResponse.data.fileUrl;
        console.log(values);
        const res = await axios.post(
          `${serverDomain}/user`,
          { ...values, companyId: 5 },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCurrentUser(res.data?.id);
        console.log(res);
        navigate("/dashboard");
        console.log("Form Data:", values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileType = file?.type;
    if (
      fileType !== "image/png" &&
      fileType !== "image/jpeg" &&
      fileType !== "image/jpg"
    ) {
      alert("Please select an image file (png, jpeg, jpg)");
      return;
    }
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <ProfileWrap>
      <div className="container">
        <div className="profile">
          <div className="overlay">
            <CiCamera className="overlay-icon" />
          </div>
          <Box
            sx={{
              mx: "auto",
              width: "10rem",
              height: "10rem",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                width: "10rem",
                height: "10rem",
                objectFit: "contain",
              }}
              src={profileImage ? URL.createObjectURL(profileImage) : Icon}
            />
            <input
              style={{
                position: "absolute",
                width: "10rem",
                height: "10rem",
                top: 0,
                opacity: 0,
              }}
              onChange={handleFileChange}
              type="file"
              ref={fileInputRef}
            />
          </Box>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid">
            <TextField
              className="input-field"
              label="First Name *"
              name="firstName"
              type="text"
              placeholder="Mehra"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              className="input-field"
              label="Last Name *"
              name="lastName"
              type="text"
              placeholder="Anish"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <div className="selectHolder">
              <label htmlFor="designation">Designation *</label>
              <div className="custom-select-container">
                <select
                  name="designation"
                  id="designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                >
                  <option value="Sr. Analyst">Sr. Analyst</option>
                  <option value="Analyst 1">Analyst 1</option>
                  <option value="Analyst 2">Analyst 2</option>
                  <option value="Analyst 3">Analyst 3</option>
                </select>
                <div className="custom-select-icon">
                  {" "}
                  <RiArrowDropDownLine />
                </div>
              </div>
            </div>
            <TextField
              className="input-field"
              label="Corporate E-mail ID *"
              name="corporateEmail"
              type="email"
              placeholder="Aanishmehra@tcs.in"
              value={formik.values.corporateEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.corporateEmail &&
                Boolean(formik.errors.corporateEmail)
              }
              helperText={
                formik.touched.corporateEmail && formik.errors.corporateEmail
              }
            />
            <TextField
              className="input-field"
              label="Employee Id  *"
              name="employeeId"
              type="text"
              placeholder="ASDFGHJL1234567"
              value={formik.values.employeeId}
              onChange={formik.handleChange}
              error={
                formik.touched.employeeId && Boolean(formik.errors.employeeId)
              }
              helperText={formik.touched.employeeId && formik.errors.employeeId}
            />
            <TextField
              className="input-field"
              label="Personal E-mail ID *"
              name="personalEmail"
              type="email"
              placeholder="anishmehra85@gmail.com"
              value={formik.values.personalEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.personalEmail &&
                Boolean(formik.errors.personalEmail)
              }
              helperText={
                formik.touched.personalEmail && formik.errors.personalEmail
              }
            />
            <TextField
              className="input-field"
              label="Contact Number *"
              name="phone"
              type="text"
              placeholder="8756349867"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              className="input-field"
              label="City *"
              name="address"
              type="text"
              placeholder="Mumbai"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
              className="input-field"
              label="Country *"
              name="country"
              type="text"
              placeholder="India"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
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

export default UploadProfile;
