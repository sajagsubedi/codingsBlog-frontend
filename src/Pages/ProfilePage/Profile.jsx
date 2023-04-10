import React from "react";
import { ProfileSection } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/index";
import { useEffect } from "react";

export default function Profile() {
  const { user, fetchProfile } = useContext(AuthContext);
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <ProfileSection className="globalSection">
      <div className="infoDiv">
      <h1 className="mainText">Your Profile</h1>
  <div className="infofield">
  <label htmlFor="name">Your name</label>
<p className="info">-{user.name}</p>
  </div>
  <div className="infofield">
  <label htmlFor="email">Your email</label>
<p className="info">-{user.email}</p>
  </div>
      </div>
    </ProfileSection>
  );
}
