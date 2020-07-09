import React, { useState } from "react";
import telegramIcon from "./telegram.svg";
import twitterIcon from "./twitter.svg";
import logo from "./logo.svg";
import { Layout, Row, Card, Typography, Col } from "antd";
import styled from "styled-components";
import bannerIcon from './logo2.png';
const { Title, Paragraph, Text } = Typography;
const { Content, Footer } = Layout;

const HomeComponent = ({ className }) => {
  const [ isMore, setIsMore ] = useState(false);
  return (
    <Layout className={className}>
      <Content>
        <Row className="banner">
          <div className="title-wrapper">
          <img src={bannerIcon} alt="bannerIcon" className="bannerIcon" />
            <div className="title-wrapper-div">
              <p className="title">TON Community Blockchain</p>
              <p className="title">Test Network Launch</p>
            </div>
          </div>
        </Row>
        <div style={{ background: "#fff" }}>
          <Row className="content" id="news">
            <Title>News</Title>
            <Typography>
              <Text>24.05.2020</Text>
              <Paragraph>
                The original TON development team is discontinuing its active involvement with the TON project due to reasons <a target="_blank" rel="noopener noreferrer" href="https://telegra.ph/What-Was-TON-And-Why-It-Is-Over-05-12">explained here</a>. The efforts of the team have been redirected to other projects. Some of the internal development branches that have been in active development and testing may get integrated into the main branch. Some minor bugfixes and Github issue answers may occasionally appear if any of the members of the original team have the spare time and inclination to contribute to the community's efforts. The principal development of the TON code is transferred to the free source community.
              </Paragraph>
              <Text>24.05.2020</Text>
              <Paragraph>
                Integrated some almost-finished components of TON Storage, TON Payments and CPS Fift from testing branches into the main branch.
              </Paragraph>
              <Text>14.04.2020</Text>
              <Paragraph>
                Changes described in the next item have been enabled at 16:12 GMT. All unupgraded full nodes, validators and clients stopped working. If you experience this, please upgrade.
              </Paragraph>
              {
                isMore ?
                <>
                  <Text>10.04.2020</Text>
                  <Paragraph>
                    <Text strong>IMPORTANT:</Text> Changes have been introduced into the block format. Please upgrade all validators, full nodes, lite-clients and TONLib instances. Old software may stop working 13.04 when the new features are enabled.
                  </Paragraph>
                  <Text>05.04.2020</Text>
                  <Paragraph>
                    Improved performance of validators running on weaker machines by removing debug-only checks. Please upgrade your validators to continue the heavy-load testing of the testnet. Consider deploying validators on higher-performance servers.
                  </Paragraph>
                  <Text>31.03.2020</Text>
                  <Paragraph>
                    Added new <a href="ConfigParam-HOWTO.txt">TON Configuration Parameter HOWTO</a> describing how to create configuration parameter proposals and vote for or against them.
                  </Paragraph>
                  <Text>01.03.2020</Text>
                  <Paragraph>
                    Added new <a href="DNS-HOWTO.txt">TON DNS documentation</a> describing the steps needed to register a TON DNS subdomain *.temp.ton for your TON Site.
                  </Paragraph>
                  <Text>11.02.2020</Text>
                  <Paragraph>
                    TON Sites are now integrated with TON DNS, <a href="TonSites-HOWTO.txt">TON Sites documentation</a> updated.
                  </Paragraph>
                  <Text>13.12.2019</Text>
                  <Paragraph>
                    TON VM has been updated to support new PRNG instructions. All validators have to be recompiled and upgraded.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    The maximal size of ext_message broadcast has been raised to 16 KiB, so that larger smart contracts may be deployed from any (upgraded) full node.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    The minimal validator stake has been lowered to 10,001 test Grams.
                  </Paragraph>
                  <Text>15.11.2019</Text>
                  <Paragraph>
                    Test network has been relaunched. All previously created accounts and smart contracts no longer exist.
                  </Paragraph>
                  <Text onClick={()=>setIsMore(false)} className='more'>↑ Up</Text>
                </> : <Text onClick={()=>setIsMore(true)} className='more'>More...</Text>
              }
              </Typography>
          </Row>
        </div>
        <div style={{ background: "#fbfbfb" }}>
          <div className="content" id="resources">
            <Title>Resources</Title>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card title={<a target="_blank" rel="noopener noreferrer" href="https://tengram.com/">Blockchain explorer</a>} className='resources-card'>
                  Simple blockchain explorer for the TON Blockchain Test Network (testnet)
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a target="_blank" rel="noopener noreferrer" href="https://github.com/ton-blockchain/ton">GitHub</a>} className='resources-card'>
                A GitHub repository with the complete source of the test version of TON Blockchain Software, including Light Client, Full Node and Validator for TON Blockchain.
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a target="_blank" href="ton-lite-client-test1.config.json">Testnet Configuration</a>} className='resources-card'>
                  Configuration file for the TON Blockchain Test Network Lite Client
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card title={<a target="_blank" href="ton-global.config.json">Global configuration</a>} className='resources-card'>
                  Global configuration for the TON Blockchain Test Network, required by Full Nodes
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a target="_blank" href="ton-global-lite-client.config.json">Combination</a>} className='resources-card'>
                  Combination of<a target="_blank" rel="noopener noreferrer" href="ton-global.config.json"> ton-global.config.json</a> and <a target="_blank" href="ton-lite-client-test1.config.json">ton-lite-client-test1.config.json</a>, useful for Ton Sites and other TON Services
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="projects.html">TON-based projects</a>} className='resources-card'>
                  A list of projects on TON submitted for the <a target="_blank" rel="noopener noreferrer" href="https://contest.com/blockchain-2-bonus">Telegram blockchain competition</a>.
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card title={<a href="/faucet">Faucet</a>} className='resources-card'>
                  {'<TON Community Blokchain>'} test network Faucet
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
                <Card title={<a href="README.txt">README</a>} className='resources-card'>
                  General information, compilation and installation instructions for the Lite Client
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="HOWTO.txt">HOWTO</a>} className='resources-card'>
                Step-by-step instructions for creating a new smart contract with the aid of the Lite Client
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="FullNode-HOWTO.txt">FullNode</a>} className='resources-card'>
                  Step-by-step instructions for setting up a Full Node in the TON Blockchain Test Network
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card title={<a href="Validator-HOWTO.txt">Validator</a>} className='resources-card'>
                  Step-by-step instructions for upgrading a Full Node to a Validator
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="TonSites-HOWTO.txt">TonSites</a>} className='resources-card'>
                Step-by-step instructions to set up a proxy for accessing TON Sites or to creating new ones
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="DNS-HOWTO.txt">DNS</a>} className='resources-card'>
                  Step-by-step instructions to register your own TON DNS domain, for example for your TON Site
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
            <Col xs={24} lg={8}>
              <Card title={<a href="ConfigParam-HOWTO.txt">ConfigParam</a>} className='resources-card'>
                Step-by-step instructions to create configuration parameter proposals and vote for or against them
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
                <Card title={<a href="ton.pdf">TON Whitepaper</a>} className='resources-card'>
                  A general description of TON Network and TON Blockchain
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="tvm.pdf">TVM</a>} className='resources-card'>
                TON Virtual Machine description
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="tblkch.pdf">Blockchain description</a>} className='resources-card'>
                  TON Blockchain description (may include outdated information)
                </Card>
              </Col>
            </Row>
            <Row justify="space-between" gutter={[16, 16]}>
              <Col xs={24} lg={8}>
                <Card title={<a href="fiftbase.pdf">Fift</a>} className='resources-card'>
                  A brief introduction to the Fift programming language
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="catchain.pdf">Catchain</a>} className='resources-card'>
                Description of BFT Consensus protocol employed by TON Blockchain while creating new blocks
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title={<a href="smc-guidelines.txt">Guidelines</a>} className='resources-card'>
                  Guidelines and best practices related to implementation of TON Blockchain smart contracts
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
          <Col xs={24} sm={10} style={{margin: '20px auto'}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'start',
                color: '#fff'
              }}
              id='telegram'
            >
              <img src={telegramIcon} alt="telegramIcon" className="icon" />
              <div style={{margin: '10px 0'}}>
              <Text style={{color: '#fff', display: 'block'}}>TON Community Telegram Channel</Text>
              <a target="_blank" rel="noopener noreferrer" href="https://t.me/ton_news">@TON_news</a>
              </div>
              <div style={{margin: '10px 0'}}>
              <Text style={{color: '#fff', display: 'block'}}>TON Community Telegram Group</Text>
              <div className="text-wrapper">
              <div  style={{marginRight:'10px'}}>
                <span style={{opacity: 0.5}}>English：</span>
                <a target="_blank" rel="noopener noreferrer"  href="https://t.me/ton_en">@TON_en</a>
                </div>
                <div>
                <span style={{opacity: 0.5}}>中文：</span>
                <a target="_blank" rel="noopener noreferrer"  href="https://t.me/ton_cn">@TON_cn</a>
                </div>
              </div>
              </div>
              <div style={{margin: '10px 0'}}>
              <Text style={{color: '#fff', display: 'block'}}>Others Group</Text>
              <div className="text-wrapper">
                <div style={{marginRight:'10px'}}>
                <span style={{opacity: 0.5}}>Research：</span>
                <a target="_blank" rel="noopener noreferrer"  href="https://t.me/ton_research" >@TON_research</a>
                </div>
                <div>
                <span style={{opacity: 0.5}}>Ru Dev：</span><a target="_blank" rel="noopener noreferrer"  href="https://t.me/TONgramDev" > @TONgramDev</a>
                </div>
              </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={7} style={{margin: '20px auto'}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'start'
              }}
              id="twitter"
            >
              <img src={twitterIcon} alt="telegramIcon" className="icon" />
              <Text style={{color: '#fff', display: 'block'}}>TON Community Twitter</Text>
              <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/TONCommunity" >@TONCommunity</a>
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
    box-shadow: 0px 5px 20px rgba(0,0,0, 0.1);
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
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        line-height:50px;
        margin: 0;
      }
    }
  }
  .content {
    max-width: 1120px;
    margin: 0 auto;
    padding: 60px 20px;
  }
  a {
    color: #28A5E7;
  }
  .ant-typography a {
    color: #28A5E7;
  }
  .more {
    color: #28A5E7;
    cursor: pointer;
    &:hover {
      color: #71bfff;
    }
  }
  .footer {
    background: #353F47;
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
      margin-right: 0
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
