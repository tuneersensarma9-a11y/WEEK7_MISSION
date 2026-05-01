function Step1({ formData, setFormData, nextStep }) {
  const isFormValid =
  formData.firstName &&
  formData.lastName &&
  formData.dob;
  return (
    <div>

      <div className="form-card">
        <label className="form-label">
          First Name <span className="required">*</span>
        </label>
        <input
          className="form-input"
          placeholder="Your answer"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>

      <div className="form-card">
        <label className="form-label">
          Last Name <span className="required">*</span>
        </label>
        <input
          className="form-input"
          placeholder="Your answer"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>

      <div className="form-card">
        <label className="form-label">
          Date of Birth <span className="required">*</span>
        </label>
        <input
          type="date"
          className="form-input"
          value={formData.dob}
          onChange={(e) =>
            setFormData({ ...formData, dob: e.target.value })
          }
        />
      </div>

      <div className="button-group">
       <button
  className={`btn ${!isFormValid ? "btn-disabled" : ""}`}
  disabled={!isFormValid}
  onClick={nextStep}
>
  Next
</button>
      </div>

    </div>
  );
}

export default Step1;