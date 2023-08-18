import Papa from "papaparse";

const StepOne = ({ formData, setFormData, setCsvFile }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvFile(file);

      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const data = result?.data;

          // Filter out rows with invalid or missing numeric values
          const validData = data.filter(
            (row) =>
              !isNaN(parseFloat(row?.X)) &&
              !isNaN(parseFloat(row?.Y)) &&
              !isNaN(parseFloat(row?.Z))
          );

          if (validData.length > 0) {
            const xValues = validData?.map((row) => parseFloat(row.X));
            const yValues = validData?.map((row) => parseFloat(row.Y));
            const zValues = validData?.map((row) => parseFloat(row.Z));

            setFormData({
              ...formData,
              max_X: Math.max(...xValues),
              min_X: Math.min(...xValues),
              max_Y: Math.max(...yValues),
              min_Y: Math.min(...yValues),
              max_Z: Math.max(...zValues),
              min_Z: Math.min(...zValues),
            });
          }
        },
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-sm mb-2 text-neutral-700"
          htmlFor="projectName"
        >
          Project Name
        </label>
        <input
          className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
          id="projectName"
          name="projectName"
          type="text"
          placeholder="Enter project name"
          onChange={(e) => handleInputChange(e)}
          value={formData?.projectName}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm mb-2 text-neutral-700"
          htmlFor="projectDescription"
        >
          Project Description
        </label>
        <textarea
          className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
          id="projectDescription"
          name="projectDescription"
          type="text"
          placeholder="Enter project description"
          rows={4}
          onChange={(e) => handleInputChange(e)}
          value={formData?.projectDescription}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2 text-neutral-700" htmlFor="client">
          Client Name
        </label>
        <input
          className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
          id="client"
          name="client"
          type="text"
          placeholder="Enter Client name"
          onChange={(e) => handleInputChange(e)}
          value={formData?.client}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm mb-2 text-neutral-700"
          htmlFor="contractor"
        >
          Contractor Name
        </label>
        <input
          className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
          id="contractor"
          name="contractor"
          type="text"
          placeholder="Enter contractor name"
          onChange={(e) => handleInputChange(e)}
          value={formData?.contractor}
          required
        />
      </div>
      <div className="mb-4">
        <div className="mb-3">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700"
          >
            Upload CSV file
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-2 py-2 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-2 file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-2 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            type="file"
            accept=".csv"
            onChange={(e) => handleFileChange(e)}
            id="formFile"
          />
        </div>
      </div>
      <div className="mb-4 flex gap-3">
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="min_X"
          >
            Minimum value of X
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="min_X"
            name="min_X"
            type="number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            value={formData?.min_X}
            required
          />
        </div>
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="max_X"
          >
            Maximum value of X
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="max_X"
            name="max_X"
            type="number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            required
            value={formData?.max_X}
          />
        </div>
      </div>
      <div className="mb-4 flex gap-3">
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="min_Y"
          >
            Minimum value of Y
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="min_Y"
            name="min_Y"
            type="number"
            required
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            value={formData?.min_Y}
          />
        </div>
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="max_Y"
          >
            Maximum value of Y
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="max_Y"
            name="max_Y"
            type="number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            required
            value={formData?.max_Y}
          />
        </div>
      </div>
      <div className="mb-4 flex gap-3">
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="min_Z"
          >
            Minimum value of Z
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="min_Z"
            name="min_Z"
            type="number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            required
            value={formData?.min_Z}
          />
        </div>
        <div className="w-full">
          <label
            className="block text-sm mb-2 text-neutral-700"
            htmlFor="max_Z"
          >
            Maximum value of Z
          </label>
          <input
            className="border outline-none border-neutral-300 rounded w-full py-2 px-3 placeholder:text-neutral-700"
            id="max_Z"
            name="max_Z"
            type="number"
            placeholder="0"
            onChange={(e) => handleInputChange(e)}
            required
            value={formData?.max_Z}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="border hover:border-blue-500 px-5 py-1 mb-5 rounded-md hover:bg-blue-500 hover:text-white"
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
