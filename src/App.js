import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const randomId = "0a70ccc5f0d692ae37c9a15f637cc6261b882530"
  const datasetsUrl = "https://stibmivb.opendatasoft.com/api/v2/catalog/datasets"
  const waitingTimeUrl = "https://stibmivb.opendatasoft.com/api/v2/catalog/datasets/waiting-time-rt-production/records/" + randomId;

  const [data, setData] = useState();
  useEffect(() => {
    axios.get(waitingTimeUrl, {
      headers: {
        // Content_Type: "application/json",
        // Authorization: "Bearer " + token,
        Authorization: "Apikey " + process.env.REACT_APP_API_KEY,
      }
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
  }, [waitingTimeUrl]);


  return (
    <div>{data ? data.record.fields.lineid : "no data"}</div>
  );
}

export default App;
