import React, { useState, useEffect } from "react";
import TableComponent from "../../../component/table/TableData";
import CustomInputHeader from "../../../component/customInputHeader/customInputHeader";
import { message } from "antd";
import { ICON } from "../../../assets/icons/icons";

import "./event.scss";
import { SimpleCurrency } from "../../../utils/simpleCurrency";
import {
  listEventMemberById,
  uploadPaymentEventById,
} from "../../../service/member";
import { UploadPayment } from "./detailEvent/uploadPayment";
import TitleComponent from "../../../component/titleComponent/titleComponent";

const EventMember = () => {
  const [state, setState] = useState({
    uploadPayment: false,
  });

  const userId = localStorage.getItem("ljk2345d");
  const [memberId, setMemberId] = useState(null);
  const [dataEvent, setDataEvent] = useState([]);
  const [page, setPage] = useState(1);

  const [image, setImage] = useState(null);
  const [imageURI, setImageURI] = useState(null);

  const [query, setQuery] = useState("");
  const keys = ["event"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    getlistEvent();
  }, []);

  const getlistEvent = () => {
    const columns = [
      {
        title: "No",
        dataIndex: "key",
        render: (value, item, index) => (page - 1) * 10 + index + 1,
      },

      {
        title: "Event",
        dataIndex: "event",
      },
      {
        title: "Start Date",
        dataIndex: "startDate",
      },
      {
        title: "End Date",
        dataIndex: "endDate",
      },
      {
        title: "Price",
        dataIndex: "price",
        render: (record, item) => <span>Rp {item.price}</span>,
      },
      {
        title: "Description",
        dataIndex: "description",
      },

      {
        title: "Action",
        dataIndex: "id",
        key: "x",
        responsive: ["sm"],
        align: "center",
        render: (record, item) => (
          <div className="action-button">
            <ICON.EDIT
              width={30}
              onClick={() => {
                uploadPaymentRecipt(item.id);
              }}
            />
          </div>
        ),
      },
    ];

    listEventMemberById(userId)
      .then((res) => {
        if (res.status === 200) {
          const dataTemp = res.data.data.map((item, index) => ({
            key: index,
            id: item.id,
            event: item.nama,
            startDate: item.startDate,
            endDate: item.endDate,
            price: SimpleCurrency(item.biaya),
            description: item.description,
          }));
          setDataEvent(dataTemp);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    const { size, type } = file;

    if (!["image/jpeg", "image/png", "img/jpg"].includes(type)) {
      message.error("You can only upload JPG/PNG file!");
      setImageURI(null);
      setImage(null);
    } else if (file && size >= 3000000) {
      message.error("Image must smaller than 3MB!");
      setImageURI(null);
      setImage(null);
    } else {
      reader.onload = () => {
        setImageURI(URL.createObjectURL(file));
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPaymentRecipt = (id) => {
    setMemberId(id);
    setState((prevState) => ({
      ...prevState,
      uploadPayment: !prevState.uploadPayment,
    }));
  };

  const onpaymentEvent = () => {
    var formData = new FormData();

    formData.append("file", image);
    formData.append("memberId", userId);
    formData.append("eventId", memberId);

    uploadPaymentEventById(formData)
      .then((res) => {
        if (res.status === 200) {
          getlistEvent();
          message.success("Upload Payment Success");
          setState((prevState) => ({
            ...prevState,
            uploadPayment: !prevState.uploadPayment,
          }));
        }
      })
      .catch((err) => {
        message.err("Upload Payment Failed");
      });
  };

  const onHide = () => {
    setState({ ...state, uploadPayment: false });
    setImageURI(null);
  };

  return (
    <React.Fragment>
      <TitleComponent title="Info Class" />
      <div className="event" id="event">
        <CustomInputHeader
          position="one-right"
          content={
            <React.Fragment>
              <input
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
            </React.Fragment>
          }
        />
        <TableComponent
          // columns={columns}
          dataSource={search(dataEvent)}
          pagination={{
            // pageSize: 25,
            onChange: (e) => setPage(e),
            showSizeChanger: true,
            // onChangePage(current) {
            // 	setPage(current + 1);
            // }
          }}
        />
      </div>
      {state.uploadPayment && (
        <UploadPayment
          show={state.uploadPayment}
          // data={detailEvent}
          onHide={onHide}
          imageURI={imageURI}
          onChangeImage={handleImage}
          onpaymentEvent={onpaymentEvent}
        />
      )}
    </React.Fragment>
  );
};
export default EventMember;
