"use client";
import React, { useState, useEffect, useRef } from "react";

import BreadCrumb from "../../../components/layout/BreadCrumb";
// import DataTable from "react-data-table-component";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

export default function page() {
  const [products, setProducts] = useState([]);
  const dt = useRef(null);
  const cols = [
    {
      header: "ID",
      field: "id",
    },
    {
      header: "FK Account",
      field: "fk_ac",
    },
    {
      header: "Product Link",
      field: "prod_link",
    },
    {
      header: "CC Account",
      field: "cc_number",
    },
    {
      header: "CC Holder Name",
      field: "cc_holder_name",
    },
    {
      header: "Gift Amount",
      field: "gift_amt",
    },
    {
      header: "TSX Amount",
      field: "tx_amt",
    },
    {
      header: "Final Price",
      field: "final_price",
    },
    {
      header: "Gift OTP",
      field: "gift_otp",
    },
    {
      header: "Purchase OTP",
      field: "purchase_otp",
    },
    {
      header: "Remark",
      field: "remark",
    },
    {
      header: "Purchase Stated At",
      field: "purchase_stated_at",
    },
    {
      header: "Status",
      field: "status",
    },
    {
      header: "Action",
      field: "action",
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
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  useEffect(() => {
    setProducts(data);
  }, []);

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, products);
        doc.save("products.pdf");
      });
    });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <Button
        type="button"
        icon="pi pi-file"
        rounded
        onClick={() => exportCSV(false)}
        data-pr-tooltip="CSV"
      />
      <Button
        type="button"
        icon="pi pi-file-excel"
        severity="success"
        rounded
        onClick={exportExcel}
        data-pr-tooltip="XLS"
      />
      <Button
        type="button"
        icon="pi pi-file-pdf"
        severity="warning"
        rounded
        onClick={exportPdf}
        data-pr-tooltip="PDF"
      />
    </div>
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
                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable
                  ref={dt}
                  value={products}
                  header={header}
                  tableStyle={{ minWidth: "50rem" }}
                >
                  {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                  ))}
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
