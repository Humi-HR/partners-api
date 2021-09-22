// Devour is one of many available JSON:API clients
import JsonApi from "devour-client";

import dotenv from "dotenv";
dotenv.config();

// Set up the JsonApi client.
// Your token should be available in the environment
const jsonApi = new JsonApi({
  apiUrl: process.env.HUMI_PARTNERS_API_URL,
  bearer: process.env.HUMI_PARTNERS_API_TOKEN,
});

// The employee resource.
jsonApi.define("employee", {
  id: "",
  first_name: "",
  last_name: "",
  legal_first_name: "",
  legal_last_name: "",
  email: "",
  work_phone: "",
  mobile_phone: "",
  department: "",
  position: "",
  employment_type: "",
  office: "",
  start_date: "",
  end_date: "",
  created_at: "",
  updated_at: "",
});

// Sample index request. Please not that the Humi Partners API paginates.
const indexResponse = jsonApi.findAll("employee", { page: { number: 1 } });
indexResponse
  .then((response) => {
    // handle response
  })
  .catch((err) => {
    // handle error
  });

// Sample show request.
const showResponse = jsonApi.find("employee", 49);
showResponse
  .then((response) => {
    // handle response
  })
  .catch((err) => {
    // handle error
  });
