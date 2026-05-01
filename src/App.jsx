import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    setStep(4);
  };

  return (
    <div className="form-container">

      {/* Header */}
      <div className="form-header">
        <h1>Account Setup</h1>
        <p>Please fill this form to create your account.</p>
        <p className="required">* Required</p>
      </div>

      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}

      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}

      {step === 3 && (
        <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
      )}

      {step === 4 && <Success />}
    </div>
  );
}

export default App;