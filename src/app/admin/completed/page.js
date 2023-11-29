"use client";
import React from "react";
import BreadCrumb from "../../../components/layout/BreadCrumb";
import DataTable from "react-data-table-component";

export default function page() {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const columns = [
    {
      id: "ID",
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "FK Account",
      selector: (row) => row.fk_ac,
      sortable: true,
    },
    {
      name: "Product Link",
      selector: (row) => row.prod_link,
      sortable: true,
    },
    {
      name: "CC Account",
      selector: (row) => row.cc_number,
      sortable: true,
    },
    {
      name: "CC Holder Name",
      selector: (row) => row.cc_holder_name,
      sortable: true,
    },
    {
      name: "Gift Amount",
      selector: (row) => row.gift_amt,
      sortable: true,
    },
    {
      name: "TSX Amount",
      selector: (row) => row.tx_amt,
      sortable: true,
    },
    {
      name: "Final Price",
      selector: (row) => row.final_price,
      sortable: true,
    },
    {
      name: "Gift OTP",
      selector: (row) => row.gift_otp,
      sortable: true,
    },
    {
      name: "Purchase OTP",
      selector: (row) => row.purchase_otp,
      sortable: true,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
      sortable: true,
    },
    {
      name: "Purchase Stated At",
      selector: (row) => row.purchase_stated_at,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => {
        return <span class="badge badge-primary text-danger">Pending</span>;
      },
    },
    {
      name: "Action",
      selector: (row) => row.action,
      cell: (row) => {
        return (
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => alert("Hello")}
          >
            Delete
          </button>
        );
      },
    },
  ];

  let i = 1;

  const data = [
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "PRASENJIT_799999",
      prod_link: "SAMSUNG 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "5555 5555 5555",
      cc_holder_name: "Prasenjit Saha",
      gift_amt: "12300",
      tx_amt: "123",
      final_price: "12423",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
    {
      id: i++,
      fk_ac: "AVIJIT_799999",
      prod_link: "HITACHI 80 CM PRODUCT FOR SAMSUNG",
      cc_number: "4444 4444 4444",
      cc_holder_name: "AVIJIT Saha",
      gift_amt: "1200",
      tx_amt: "123",
      final_price: "15000",
      gift_otp: "123456",
      purchase_otp: "123456",
      remark: "",
      purchase_stated_at: "Wed, 29 Nov 2023 05:25:04 GMT",
      status: "",
      action: "",
    },
  ];

  const convertArrayOfObjectsToCSV = (array) => {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        // eslint-disable-next-line no-plusplus
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  };

  const downloadCSV = (array) => {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  };

  const Export = ({ onExport }) => (
    <button
      className="btn btn-sm btn-primary"
      onClick={(e) => onExport(e.target.value)}
    >
      Export
    </button>
  );

  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  return (
    <main id="main" className="main">
      {/* End Page Title */}
      <BreadCrumb />
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <DataTable
                  title="Purchase Completed"
                  pagination
                  columns={columns}
                  data={data}
                  selectableRows
                  actions={actionsMemo}
                  defaultSortFieldId="ID"
                  defaultSortAsc={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
