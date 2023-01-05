// export const info = {
//   name: "John Doe",
//   gender: "Male",
//   caste: "OBC",
//   d_o_b: "01/01/2000",
//   religion: "Hindu",
//   blood_group: "O+",
//   mother_tongue: "English",
//   sic: "21BCSN80",
//   regd: "2101341080",
//   mobile_number: "6478234776",
//   email: "something@gmail.com",
//   faculty_advisor: "Dr. John Doe",
//   f_a_mobile_number: "6478234776",
//   home_contact_no: "6478234776",
//   program: "Btech",
//   branch: "Computer Science and Engineering",
//   branch_short: "C.S.E",
//   semester: "3rd",
//   group: 2,
//   batch: "2021-2025"
// };

import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

const Info = () => {
  const [info, setInfoData] = useState({});
  const fetchInfo = async () => {
    const email = localStorage.getItem("email");
    const url = `http://localhost:5000/api/getUserData/${email}`;
    await axios.get(url).then((res) => {
      setInfoData((info) => ({
        ...info,
        ...res.data
      }));
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return info;
};

export default Info;
// export default info
