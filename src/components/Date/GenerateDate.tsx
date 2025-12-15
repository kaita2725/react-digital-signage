import "./style.css";
const GenerateDate = () => {
  const today = new Date();

  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  // const formattedDateISO = today.toISOString().split("T")[0];
  return (
    <div className="date-container">
      <span>{formattedDate}</span>
    </div>
  );
};
export default GenerateDate;
