"use client";
import React from "react";
import BreadCrumb from "../../../components/layout/BreadCrumb";
import DataTable from "react-data-table-component";
export default function page() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "FK Account",
      selector: (row) => row.fk_ac,
    },
    {
      name: "Product Link",
      selector: (row) => row.prod_link,
    },
    {
      name: "CC Account",
      selector: (row) => row.cc_number,
    },
    {
      name: "CC Holder Name",
      selector: (row) => row.cc_holder_name,
    },
    {
      name: "Gift Amount",
      selector: (row) => row.gift_amt,
    },
    {
      name: "TSX Amount",
      selector: (row) => row.tx_amt,
    },
    {
      name: "Final Price",
      selector: (row) => row.final_price,
    },
    {
      name: "Gift OTP",
      selector: (row) => row.gift_otp,
    },
    {
      name: "Purchase OTP",
      selector: (row) => row.purchase_otp,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
    },
    {
      name: "Purchase Stated At",
      selector: (row) => row.purchase_stated_at,
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
                  title="Purchase In Progress"
                  pagination
                  columns={columns}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
