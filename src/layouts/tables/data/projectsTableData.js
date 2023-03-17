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
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";

export default function data() {
  return {
    columns: [
      { Header: "no", accessor: "no", align: "left" },
      { Header: "id truk", accessor: "id_truk", align: "left" },
      { Header: "tanggal", accessor: "tanggal", align: "center" },
      { Header: "jam", accessor: "jam", align: "center" },
      { Header: "plat nomor", accessor: "plat_nomor", align: "center" },
      { Header: "berat", accessor: "berat", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        no: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        id_truk: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            #123
          </MDTypography>
        ),
        tanggal: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9 Maret 2023
          </MDTypography>
        ),
        jam: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10.01.00
          </MDTypography>
        ),
        plat_nomor: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            AE 1234 BC
          </MDTypography>
        ),
        berat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            98 kg
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="give verifikasi" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        no: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        id_truk: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            #123
          </MDTypography>
        ),
        tanggal: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            9 Maret 2023
          </MDTypography>
        ),
        jam: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10.01.00
          </MDTypography>
        ),
        plat_nomor: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            AE 1234 BC
          </MDTypography>
        ),
        berat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            98 kg
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="verified" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
