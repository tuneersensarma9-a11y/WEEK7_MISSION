import { useState } from "react";

function Step2({ formData, setFormData, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isFormValid =
  formData.email &&
  formData.password &&
  formData.confirmPassword &&
  formData.password === formData.confirmPassword;

  const passwordsMatch =
    formData.password === formData.confirmPassword;

  return (
    <div>

      {/* Email */}
      <div className="form-card">
        <label className="form-label">
          Email <span className="required">*</span>
        </label>
        <input
          className="form-input"
          type="email"
          placeholder="Your answer"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      {/* Password */}
      <div className="form-card">
        <label className="form-label">
          Password <span className="required">*</span>
        </label>

        <div style={{ position: "relative" }}>
          <input
            className="form-input"
            type={showPassword ? "text" : "password"}
            placeholder="Your answer"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </span>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="form-card">
        <label className="form-label">
          Confirm Password <span className="required">*</span>
        </label>

        <div style={{ position: "relative" }}>
          <input
            className="form-input"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Your answer"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value
              })
            }
          />

          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            <i className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </span>
        </div>

        {/* Error */}
        {formData.confirmPassword && !passwordsMatch && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            Passwords do not match
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-secondary" onClick={prevStep}>
          Back
        </button>

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

export default Step2;