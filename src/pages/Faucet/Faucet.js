import React, { useState } from "react";
import { Layout, Row, Typography, Input, Button, notification } from "antd";
import styled from "styled-components";
import bannerIcon from "./logo2.png";
import axios from "axios";

const { Paragraph } = Typography;
const { Content } = Layout;
const FaucetComponent = ({ className }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    try {
      axios.post(`http://118.190.39.95:53780/${value}`).then((res) => {
        const result = res.data;
        const { state, message } = result;
        if (state === "Failed") {
          notification["error"]({
            message: "Failed",
            description: message,
          });
        } else {
          notification["success"]({
            message: "Success",
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout className={className}>
      <Content>
        <Row className="banner">
          <div className="title-wrapper">
            <img src={bannerIcon} alt="bannerIcon" className="bannerIcon" />
            <div className="title-wrapper-div">
              <p className="title">TON Community Blockchain</p>
              <p className="title">Test Network Faucet</p>
            </div>
            <div className="input-wrapper">
              <Input
                className="input"
                placeholder="Enter your wallet address"
                onChange={handleChange}
              />
              <Button className="button" type="primary" onClick={handleClick}>
                20 test TONcoins
              </Button>
            </div>
            <Paragraph className="details">
              Make sure your config is correct. Each address is allowed to enter
              3 times a day, each address can receive up to 300 test TONcoins
            </Paragraph>
            <Paragraph className="details">
              If you want running a validator, you need at least 10000+ test
              TONcoins.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://t.me/toozwu"
              >
                Contact here
              </a>
              .
            </Paragraph>
          </div>
        </Row>
      </Content>
    </Layout>
  );
};

export const Faucet = styled(FaucetComponent)`
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .bannerIcon {
      height: 160px;
    }
    .title-wrapper {
      max-width: 1120px;
      width: 100%;
      text-align: center;
      padding: 110px 20px 110px 20px;
      .title-wrapper-div {
        padding-top: 20px;
        padding-bottom: 10px;
        .title {
          font-size: 36px;
          color: #222222;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          line-height: 50px;
          margin: 0;
        }
      }
    }
    .input-wrapper {
      display: flex;
      max-width: 500px;
      margin: 50px auto;
    }
    .input {
      margin: 8px;
    }
    .button {
      margin: 8px;
      background: #1677ff;
    }
    .details {
      max-width: 500px;
      margin: 20px auto;
    }
  }

  @media (max-width: 768px) {
    .banner {
      .title-wrapper {
        .title-wrapper-div {
          .title {
            font-size: 24px;
          }
        }
      }
    }
    .input-wrapper {
      flex-direction: column;
    }
    .input {
      margin: 8px 0 !important;
    }
    .button {
      margin: 8px 0 !important;
    }
  }
`;
