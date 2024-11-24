import React, { useState } from "react";
import "./PageComps.css";

const ShareExperience = () => {
  const [formData, setFormData] = useState({
    experience: "",
    emotions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Experience Submitted:", formData);
    alert("Thank you for sharing your experience anonymously!");
    setFormData({ experience: "", emotions: "" }); // Reset the form
  };

  return (
    <div className="form-container">
      <h2>Share Your Experience With Us Anonymously</h2>
      <form onSubmit={handleSubmit} className="experience-form">
        <div className="form-group">
          <label htmlFor="experience">Your Experience</label>
          <textarea
            id="experience"
            name="experience"
            placeholder="Describe your mental health experience..."
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="emotions">How Did You Feel?</label>
          <select
            id="emotions"
            name="emotions"
            value={formData.emotions}
            onChange={handleChange}
            required
          >
            <option value="">Select an emotion</option>
            <option value="happy">Happy</option>
            <option value="anxious">Anxious</option>
            <option value="sad">Sad</option>
            <option value="neutral">Neutral</option>
            <option value="hopeful">Hopeful</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShareExperience;
