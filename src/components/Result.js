import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import { clearResult } from "../redux/features/resultSlice";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { result: tableData } = useSelector((state) => state?.result);
  const dispatch = useDispatch();
  const printRef = useRef();
  const navigate = useNavigate();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div>
      <div className="p-8" ref={printRef}>
        <h3 className="font-bold mt-10 mb-3 text-center">All Result Data</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-center border-collapse border">
            <thead className="text-center">
              <tr className="bg-gray-200 whitespace-nowrap">
                <th className="py-2 px-4">Project Name</th>
                <th className="py-2 px-4">Project Description</th>
                <th className="py-2 px-4">Client</th>
                <th className="py-2 px-4">Contractor</th>
                <th className="py-2 px-4">Max_X</th>
                <th className="py-2 px-4">Min_X</th>
                <th className="py-2 px-4">Max_Y</th>
                <th className="py-2 px-4">Min_Y</th>
                <th className="py-2 px-4">Max_Z</th>
                <th className="py-2 px-4">Min_Z</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {tableData?.map((data, i) => (
                <tr key={i}>
                  <td className="py-2 px-4">{data?.projectName}</td>
                  <td className="py-2 px-4">{data?.projectDescription}</td>
                  <td className="py-2 px-4">{data?.client}</td>
                  <td className="py-2 px-4">{data?.contractor}</td>
                  <td className="py-2 px-4">{data?.max_X}</td>
                  <td className="py-2 px-4">{data?.min_X}</td>
                  <td className="py-2 px-4">{data?.max_Y}</td>
                  <td className="py-2 px-4">{data?.min_Y}</td>
                  <td className="py-2 px-4">{data?.max_Z}</td>
                  <td className="py-2 px-4">{data?.min_Z}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          onClick={() => {
            dispatch(clearResult());
            navigate("/");
          }}
          className="border hover:border-blue-500 px-5 py-1 mb-5 rounded-md hover:bg-blue-500 hover:text-white"
        >
          Clear Result
        </button>
        <button
          onClick={handleDownloadPdf}
          className="border hover:border-blue-500 px-5 py-1 mb-5 rounded-md hover:bg-blue-500 hover:text-white"
        >
          Download Pdf
        </button>
      </div>
    </div>
  );
};

export default Result;
