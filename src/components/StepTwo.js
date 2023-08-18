import React from "react";
import { ChartView } from "./ChartView";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addResult } from "../redux/features/resultSlice";

const StepTwo = ({ formData, setStep, csvFile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResult = () => {
    dispatch(addResult(formData));
    navigate("/result");
  };

  return (
    <div>
      <p className="mb-2 text-neutral-700">
        <span className="font-bold">Project name: </span>
        {formData?.projectName}
      </p>
      <p className="mb-2 text-neutral-700">
        <span className="font-bold">Project description: </span>
        {formData?.projectDescription}
      </p>
      <p className="mb-2 text-neutral-700">
        <span className="font-bold">Client: </span>
        {formData?.client}
      </p>
      <p className="mb-2 text-neutral-700">
        <span className="font-bold">Contructor: </span>
        {formData?.contractor}
      </p>
      <div className="flex justify-between text-neutral-700 mb-2">
        <p>
          <span className="font-bold">Min of X: </span>
          {formData?.min_X}
        </p>
        <p>
          <span className="font-bold">Max of X: </span>
          {formData?.max_X}
        </p>
      </div>
      <div className="flex justify-between text-neutral-700 mb-2">
        <p>
          <span className="font-bold">Min of Y: </span>
          {formData?.min_Y}
        </p>
        <p>
          <span className="font-bold">Max of X: </span>
          {formData?.max_Y}
        </p>
      </div>
      <div className="flex justify-between text-neutral-700 mb-2">
        <p>
          <span className="font-bold">Min of Z: </span>
          {formData?.min_Z}
        </p>
        <p>
          <span className="font-bold">Max of Z: </span>
          {formData?.max_Z}
        </p>
      </div>
      {<ChartView csvFile={csvFile} />}
      <div className="flex justify-between mt-5">
        <button
          className="border hover:border-blue-500 px-5 py-1 mb-5 rounded-md hover:bg-blue-500 hover:text-white"
          onClick={() => setStep(1)}
        >
          Previous
        </button>
        <button
          onClick={() => handleResult()}
          className="border hover:border-blue-500 px-5 py-1 mb-5 rounded-md hover:bg-blue-500 hover:text-white"
        >
          Result
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
