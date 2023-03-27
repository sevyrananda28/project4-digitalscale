/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "id truk", accessor: "id_truk", align: "left" },
      { Header: "plat nomor", accessor: "plat", align: "left" },
      { Header: "beban kosong", accessor: "beban_kosong", align: "left" },
      { Header: "jenis truk", accessor: "jenis_truk", align: "left" },
      { Header: "beban max", accessor: "beban_max", align: "left" },
    ],

    rows: [
      {
        id_truk: <Author name="1" />,
        plat: <Job title="AE 123 BC" />,
        beban_kosong: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            80 kg
          </MDTypography>
        ),
        jenis_truk: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            truk tambang
          </MDTypography>
        ),
        beban_max: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            90 kg
          </MDTypography>
        ),
      },
    ],
  };
}
