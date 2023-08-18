import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

const App = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });
  const [csvFile, setCsvFile] = useState(null);
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="lg:w-[40%] md:w-[80%] w-[95%]">
        <h3 className="font-bold text-center text-[20px] mt-3">
          Assignment Task
        </h3>
        <div className="w-full flex justify-around mt-5 mb-1">
          <p>Step 1</p>
          <p>Step 2</p>
        </div>
        <div className="h-[5px] border mb-5 rounded-sm">
          <div
            className={
              step === 1
                ? "w-[50%] bg-blue-500 h-full rounded-sm"
                : "w-full bg-blue-500 h-full rounded-sm"
            }
          ></div>
        </div>
        {step === 1 ? (
          <form onSubmit={handleSubmit}>
            <StepOne
              formData={formData}
              setFormData={setFormData}
              setCsvFile={setCsvFile}
            />
          </form>
        ) : (
          <StepTwo formData={formData} setStep={setStep} csvFile={csvFile} />
        )}
      </div>
    </div>
  );
};

export default App;
