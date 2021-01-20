import React, { useState } from "react";
import telegramIcon from "./telegram.svg";
import twitterIcon from "./twitter.svg";
import logo from "./logo.svg";
import { Layout, Row, Card, Typography, Col } from "antd";
import styled from "styled-components";
import bannerIcon from "./logo2.png";
const { Title, Paragraph, Text } = Typography;
const { Content, Footer } = Layout;

const HomeComponent = ({ className }) => {
  const [isMore, setIsMore] = useState(false);
  return (
    <Layout className={className}>
      <Content>
        <Row className="banner">
          <div className="title-wrapper">
            <img src={bannerIcon} alt="bannerIcon" className="bannerIcon" />
            <div className="title-wrapper-div">
              <p className="title">TON Community Blockchain</p>
              <p className="title">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://toncommunity.org/info.html"
                >
                  Proof of Heart ❤️ →{" "}
                </a>
              </p>
              <a href="https://drive.google.com/file/d/1PGjS9ScYdLMCTdOJsXZpiR0a7MrMsaso/view?usp=sharing">
                Lite Paper
              </a>{" "}
              |{" "}
              <a href="https://drive.google.com/file/d/1OQFa27yPbAnIZwrY793F-32fDuV6kjCJ/view?usp=sharing">
                Roadmap
              </a>{" "}
              |{" "}
              <a href="https://drive.google.com/file/d/1l-66ninBUKWzeRWeqHkkbk344GTErcIx/view?usp=sharing">
                Token Distribution
              </a>
            </div>
          </div>
        </Row>
        <div style={{ background: "#fff" }}>
          <Row className="content" id="news">
            <Title>News</Title>
            <Typography>
              <Text>17.12.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                TONCommunity.org new twitter account launch: < a href="https://twitter.com/TONCommunityOrg"> @TONCommunityOrg</ a>.
              </Paragraph>  
              <Text>03.12.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                < a href="https://telegra.ph/TON-Community-Update-12-08"> TONCommunity.org Project Update</ a>.
              </Paragraph>   
              <Text>03.11.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                Public test: rain / tip / giveaway $TON in Telegram Messenger; Time: 04.11.2020~06.11.2020 UTC+8 22:00; Place: telegram group < a href="https://t.me/ton_en"> @ton_en</ a>, < a href="https://t.me/ton_cn"> @ton_cn</ a>.
              </Paragraph>    
              <Text>14.10.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                1,Testnet4 Launch;2,New proposal: Modify Main network Supply,< a href="https://snapshot.page/#/ton/proposal/QmXhuKWbkfVyu8PazQz7pA349KFTJUanP7rntT7VoJVrDT"> Here</ a>
              </Paragraph>
              <Text>24.09.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                < a href="https://telegra.ph/A-short-history-of-TONCommunityorg-09-24"> A short history of TONCommunity.org</ a>
              </Paragraph>
              <Text>10.09.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                Update the TONCommunity.org Project data:1,Test network address:14870; 2,Test network translations:61251; 3,iOS APP Download:1051; 4,Community Channel:32647; 5,Community Group Member:9897
              </Paragraph>
              <Text>08.09.2020</Text> <Text strong> Community</Text>
              <Paragraph>
                < a href="https://t.me/ton_news/34"> Creative Contest Closed and Winner List！</ a>
              </Paragraph>
              {isMore ? (
                <>
                  <Text>28.08.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                    Post: < a href="https://telegra.ph/TON-Community-Public-Doation-Plan-08-28"> TON Community Public Doation Plan </ a> -> How to Join? Follow our < a href="https://t.me/ton_news"> Channel </ a> and < a href="https://t.me/ton_en"> Group </ a>.
                  </Paragraph>
                  <Text>22.08.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                    Auction --- Proof of Heart Closed. The auction received 24.2778 ETH, which will be donated to the ETH Foundation. Thank you ETH for bringing Defi prosperity.
                  </Paragraph>
                  <Text>18.08.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                    1,TONCommunity.org project add Defi in Roadmap.
                    2,Auction donation activity: < a href="https://toncommunity.org/info.html"> Proof of Heart</ a>
                  </Paragraph>
                  <Text>17.08.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                    1,Release TONCommunity.org project < a href="https://drive.google.com/file/d/1PGjS9ScYdLMCTdOJsXZpiR0a7MrMsaso/view?usp=sharing"> Lite Paper</ a>
                    2,Release < a href="https://drive.google.com/file/d/1OQFa27yPbAnIZwrY793F-32fDuV6kjCJ/view?usp=sharing"> Roadmap</ a>
                    3,Release < a href="https://drive.google.com/file/d/1l-66ninBUKWzeRWeqHkkbk344GTErcIx/view?usp=sharing"> Token Distribution</ a>
                    4,Release ERC20-TON, Token Contract: 0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a
                  </Paragraph>
                  <Text>28.07.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                     TONCommunity.org Testnet Launch and Welcome TON Blockchain
                     Testnet2 Validator Join.Check{" "}
                     <a
                     target="_blank"
                      rel="noopener noreferrer"
                     href="https://github.com/TONCommunity/Project"
                      >
                      here
                     </a>
                     .
                  </Paragraph>
                  <Text>06.07.2020</Text>
                  <Paragraph>
                    We are discontinuing our support of the test network of the
                    TON Blockchain. Our remaining validators will be switched
                    off not later than 1.08.2020. Please save all relevant data
                    and terminate your testing process. If you need to continue
                    testing after this date, you can install your own testnet
                    validators as explained{" "}
                    <a href="FullNode-HOWTO.txt">here</a>,{" "}
                    <a href="Validator-HOWTO.txt">here</a> and{" "}
                    <a href="TestGrams-HOWTO.txt">here</a>.
                  </Paragraph>
                  <Text>29.05.2020</Text> <Text strong> Community</Text>
                  <Paragraph>
                    TON Community{" "}
                    <a href="FullNode-HOWTO.txt">announcements restart TON</a>.
                  </Paragraph>
                  <Text>24.05.2020</Text>
                  <Paragraph>
                    The original TON development team is discontinuing its
                    active involvement with the TON project due to reasons{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://telegra.ph/What-Was-TON-And-Why-It-Is-Over-05-12"
                    >
                      explained here
                    </a>
                    . The efforts of the team have been redirected to other
                    projects. Some of the internal development branches that
                    have been in active development and testing may get
                    integrated into the main branch. Some minor bugfixes and
                    Github issue answers may occasionally appear if any of the
                    members of the original team have the spare time and
                    inclination to contribute to the community's efforts. The
                    principal development of the TON code is transferred to the
                    free source community.
                  </Paragraph>
                  <Text>24.05.2020</Text>
                  <Paragraph>
                    Integrated some almost-finished components of TON Storage,
                    TON Payments and CPS Fift from testing branches into the
                    main branch.
                  </Paragraph>
                  <Text>14.04.2020</Text>
                  <Paragraph>
                    Changes described in the next item have been enabled at
                    16:12 GMT. All unupgraded full nodes, validators and clients
                    stopped working. If you experience this, please upgrade.
                  </Paragraph>
                  <Text>10.04.2020</Text>
                  <Paragraph>
                    <Text strong>IMPORTANT:</Text> Changes have been introduced
                    into the block format. Please upgrade all validators, full
                    nodes, lite-clients and TONLib instances. Old software may
                    stop working 13.04 when the new features are enabled.
                  </Paragraph>
                  <Text>05.04.2020</Text>
                  <Paragraph>
                    Improved performance of validators running on weaker
                    machines by removing debug-only checks. Please upgrade your
                    validators to continue the heavy-load testing of the
                    testnet. Consider deploying validators on higher-performance
                    servers.
                  </Paragraph>
                  <Text>31.03.2020</Text>
                  <Paragraph>
                    Added new{" "}
                    <a href="ConfigParam-HOWTO.txt">
                      TON Configuration Parameter HOWTO
                    </a>{" "}
                    describing how to create configuration parameter proposals
                    and vote for or against them.
                  </Paragraph>
                  <Text>01.03.2020</Text>
                  <Paragraph>
                    Added new <a href="DNS-HOWTO.txt">TON DNS documentation</a>{" "}
                    describing the steps needed to register a TON DNS subdomain
                    *.temp.ton for your TON Site.
                  </Paragraph>
                  <Text>11.02.2020</Text>
                  <Paragraph>
                    TON Sites are now integrated with TON DNS,{" "}
                    <a href="TonSites-HOWTO.txt">TON Sites documentation</a>{" "}
                    updated.
                  </Paragraph>
                  <Text>13.12.2019</Text>
                  <Paragraph>
                    TON VM has been updated to support new PRNG instructions.
                    All validators have to be recompiled and upgraded.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    The maximal size of ext_message broadcast has been raised to
                    16 KiB, so that larger smart contracts may be deployed from
                    any (upgraded) full node.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    The minimal validator stake has been lowered to 10,001 test
                    Grams.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    Test network has been relaunched. All previously created
                    accounts and smart contracts no longer exist.
                  </Paragraph>
                  <Text>06.06.2019 9</Text>
                  <Paragraph>
                    Founding TONBUS that is part of TONCommunity.org
                  </Paragraph>
                  <Text onClick={() => setIsMore(false)} className="more">
                    ↑ Up
                  </Text>
                </>
              ) : (
                <Text onClick={() => setIsMore(true)} className="more">
                  More...
                </Text>
              )}
            </Typography>
          </Row>
        </div>
        <div style={{ background: "#fbfbfb" }}>
          <div className="content" id="resources">
            <Title>Resources</Title>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wallet.ton.org/"
                    >
                      Blockchain Wallet
                    </a>
                  }
                  className="resources-card"
                >
                  Test Gram Wallet Set up your own Gram Wallet on the TON
                  Testnet. Available for{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ton.org/apps/wsetup.0.9.8.dmg"
                  >
                    macOS
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ton.org/apps/wsetup.0.9.8.tar.xz"
                  >
                    Linux
                  </a>
                  ,
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ton.org/apps/wsetup.0.9.8.exe"
                  >
                    Windows
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ton.org/apps/wallet.apk"
                  >
                    Android(APK)
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=org.tginfo.telegram.messenger.wallet"
                  >
                    Android(Google Play)
                  </a>
                  , and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://testflight.apple.com/join/sYg7ibyW"
                  >
                    iOS here
                  </a>
                  .
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/gram50bot"
                    >
                      Blockchain explorer
                    </a>
                  }
                  className="resources-card"
                >
                  This is a{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/gram50bot"
                  >
                    Telegram bot
                  </a>
                  , simple TON wallet + simple explorer for the TONCommunity.org
                  Testnet3.
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="https://github.com/TONCommunity/ton-TIPs">Roadmap</a>}
                  className="resources-card"
                >
                  the TONCommunity.org project Roadmap
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ton-blockchain/ton"
                    >
                      GitHub - TON
                    </a>
                  }
                  className="resources-card"
                >
                  A GitHub repository with the complete source of the test
                  version of TON Blockchain Software, including Light Client,
                  Full Node and Validator for TON Blockchain.
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/toncommunity"
                    >
                      GitHub - TON Community
                    </a>
                  }
                  className="resources-card"
                >
                  About TONCommunity.org Project.
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a target="_blank" href="ton-lite-client-test3.config.json">
                      Testnet Configuration
                    </a>
                  }
                  className="resources-card"
                >
                  Configuration file for the TONCommunity.org Testnet3 Lite
                  Client
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a target="_blank" href="toncommunity-global.config.json">
                      Global configuration
                    </a>
                  }
                  className="resources-card"
                >
                  Global configuration for the TONCommunity.org Testnet3,
                  required by Full Nodes
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <a target="_blank" href="toncommunity-global.config.json">
                      Combination
                    </a>
                  }
                  className="resources-card"
                >
                  Combination of
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="toncommunity-global.config.json"
                  >
                    {" "}
                    toncommunity-global.config.json
                  </a>{" "}
                  and{" "}
                  <a target="_blank" href="ton-lite-client-test3.config.json">
                    toncommunity-lite-client.config.json
                  </a>
                  , useful for Ton Sites and other TON Services
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="projects.html">TON-based projects</a>}
                  className="resources-card"
                >
                  About TON-based project and a list of projects on TON
                  submitted for the{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://contest.com/blockchain-2-bonus"
                  >
                    Telegram blockchain competition
                  </a>
                  .
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div style={{ background: "#fff" }}>
          <div className="content" id="howtos">
            <Title>HOWTOs</Title>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="README.txt">README</a>}
                  className="resources-card"
                >
                  General information, compilation and installation instructions
                  for the Lite Client
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="HOWTO.txt">HOWTO</a>}
                  className="resources-card"
                >
                  Step-by-step instructions for creating a new smart contract
                  with the aid of the Lite Client
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="FullNode-HOWTO.txt">FullNode</a>}
                  className="resources-card"
                >
                  Step-by-step instructions for setting up a Full Node in the
                  TON Blockchain Test Network
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="Validator-HOWTO.txt">Validator</a>}
                  className="resources-card"
                >
                  Step-by-step instructions for upgrading a Full Node to a
                  Validator
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="TonSites-HOWTO.txt">TonSites</a>}
                  className="resources-card"
                >
                  Step-by-step instructions to set up a proxy for accessing TON
                  Sites or to creating new ones
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="DNS-HOWTO.txt">DNS</a>}
                  className="resources-card"
                >
                  Step-by-step instructions to register your own TON DNS domain,
                  for example for your TON Site
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="ConfigParam-HOWTO.txt">ConfigParam</a>}
                  className="resources-card"
                >
                  Step-by-step instructions to create configuration parameter
                  proposals and vote for or against them
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div style={{ background: "#fbfbfb" }}>
          <div className="content" id="decumentation">
            <Title>Documentation</Title>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="ton.pdf">TON Whitepaper</a>}
                  className="resources-card"
                >
                  A general description of TON Network and TON Blockchain
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="tvm.pdf">TVM</a>}
                  className="resources-card"
                >
                  TON Virtual Machine description
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="tblkch.pdf">Blockchain description</a>}
                  className="resources-card"
                >
                  TON Blockchain description (may include outdated information)
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="fiftbase.pdf">Fift</a>}
                  className="resources-card"
                >
                  A brief introduction to the Fift programming language
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="catchain.pdf">Catchain</a>}
                  className="resources-card"
                >
                  Description of BFT Consensus protocol employed by TON
                  Blockchain while creating new blocks
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<a href="smc-guidelines.txt">Guidelines</a>}
                  className="resources-card"
                >
                  Guidelines and best practices related to implementation of TON
                  Blockchain smart contracts
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <Row className="wrapper">
          <Col xs={24} sm={7}>
            <img src={logo} alt="footer-logo" className="logo" />
          </Col>
          <Col xs={24} sm={10} style={{ margin: "20px auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                color: "#fff",
              }}
              id="telegram"
            >
              <img src={telegramIcon} alt="telegramIcon" className="icon" />
              <div style={{ margin: "10px 0" }}>
                <Text style={{ color: "#fff", display: "block" }}>
                  TON Community Telegram Channel
                </Text>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/ton_news"
                >
                  @TON_news
                </a>
              </div>
              <div style={{ margin: "10px 0" }}>
                <Text style={{ color: "#fff", display: "block" }}>
                  TON Community Telegram Group
                </Text>
                <div className="text-wrapper">
                  <div style={{ marginRight: "10px" }}>
                    <span style={{ opacity: 0.5 }}>English：</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/ton_en"
                    >
                      @TON_en
                    </a>
                  </div>
                  <div>
                    <span style={{ opacity: 0.5 }}>中文：</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/ton_cn"
                    >
                      @TON_cn
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ margin: "10px 0" }}>
                <Text style={{ color: "#fff", display: "block" }}>
                  Others Group
                </Text>
                <div className="text-wrapper">
                  <div style={{ marginRight: "10px" }}>
                    <span style={{ opacity: 0.5 }}>Research：</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/ton_research"
                    >
                      @TON_research
                    </a>
                  </div>
                  <div>
                    <span style={{ opacity: 0.5 }}>Ru Dev：</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://t.me/TONgramDev"
                    >
                      {" "}
                      @TONgramDev
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={7} style={{ margin: "20px auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
              id="twitter"
            >
              <img src={twitterIcon} alt="telegramIcon" className="icon" />
              <Text style={{ color: "#fff", display: "block" }}>
                TON Community Twitter
              </Text>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/TONCommunityOrg"
              >
                @TONCommunityOrg
              </a>
            </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export const Home = styled(HomeComponent)`
  .bannerIcon {
    height: 160px;
  }
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .resources-card {
    min-height: 200px;
    border: 0;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    margin: 4px;
  }
  .title-wrapper {
    max-width: 1120px;
    width: 100%;
    text-align: center;
    padding: 160px 20px 40px 20px;
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
  .content {
    max-width: 1120px;
    margin: 0 auto;
    padding: 60px 20px;
    flex-direction: column;
  }
  a {
    color: #28a5e7;
  }
  .ant-typography a {
    color: #28a5e7;
  }
  .more {
    color: #28a5e7;
    cursor: pointer;
    &:hover {
      color: #71bfff;
    }
  }
  .footer {
    background: #353f47;
    min-height: 300px;
    .wrapper {
      padding: 10px 0;
      max-width: 1120px;
      margin: 0 auto;
      height: 100%;
      min-height: 300px;
      display: flex;
      align-items: start;
      .icon {
        height: 30px;
        margin-bottom: 20px;
      }
    }
    .logo {
      margin-right: 0;
    }
  }
  .text-wrapper {
    display: flex;
  }
  @media (max-width: 768px) {
    .text-wrapper {
      flex-direction: column;
    }
    .title-wrapper {
      .title-wrapper-div {
        .title {
          font-size: 24px;
        }
      }
    }
  }
`;
