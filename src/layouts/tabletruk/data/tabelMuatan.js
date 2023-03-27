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
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";

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
      { Header: "id muatan", accessor: "id_muatan", align: "left" },
      { Header: "beban seluruh", accessor: "beban_seluruh", align: "left" },
      { Header: "status", accessor: "status", align: "left" },
      { Header: "beban muatan", accessor: "beban_muatan", align: "left" },
      { Header: "waktu berangkat", accessor: "waktu_berangkat", align: "left" },
      { Header: "jenis muatan", accessor: "jenis_muatan", align: "left" },
      { Header: "action", accessor: "action", align: "left" },
      { Header: "", accessor: "action1", align: "left" },
    ],

    rows: [
      {
        id_muatan: <Author name="1" />,
        beban_seluruh: <Job title="100 kg" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            approved
          </MDTypography>
        ),
        beban_muatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            20 Kg
          </MDTypography>
        ),
        waktu_berangkat: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12.00 WIB
          </MDTypography>
        ),
        jenis_muatan: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Pasir
          </MDTypography>
        ),
        action: (
          <MDButton variant="text" color="dark">
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        ),
        action1: (
          <MDButton variant="text" color="error">
            <Icon>delete</Icon>&nbsp;delete
          </MDButton>
        ),
      },
    ],
  };
}
