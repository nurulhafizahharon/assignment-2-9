import "./App.css";
import mockAPI from "./api/mockapi";
import { useState, useEffect } from "react";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState({
    // update_timestamp: "",
    timestamp: "",
    reading: {},
  });

  const apiGet = async () => {
    try {
      const response = await mockAPI.get("/pm25");

      setData((prevData) => ({
        ...prevData,
        // update_timestamp: new Date(),
        timestamp: new Date(),
        reading: response.data.items[0].readings.pm25_one_hourly,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      <h2>PM2.5 Readings</h2>
      {/* <h3>Update Timestamp {data.update_timestamp.toString()}</h3> */}
      <h3>Timestamp: {data.timestamp.toString()}</h3>
      <button onClick={() => apiGet()}>Load</button>
      <Table data={data} />
    </div>
  );
}

export default App;
