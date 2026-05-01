function Step3({ formData, prevStep, handleSubmit }) {
  return (
    <div>

      <div className="form-card">
        <h3>Review Your Details</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>DOB:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
}

export default Step3;