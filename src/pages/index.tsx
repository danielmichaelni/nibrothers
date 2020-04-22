import { Layout as BaseLayout, Space } from 'antd';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled(BaseLayout)`
  min-height: 100vh;
`;

const Header = styled(BaseLayout.Header)`
  background: unset;
  border-bottom: 1px solid #383838;
`;

const Content = styled(BaseLayout.Content)`
  margin: auto;
  max-width: 960px;
  padding: 50px;
  width: 100%;
`;

const Footer = styled(BaseLayout.Footer)`
  border-top: 1px solid #383838;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header>
        <Logo>Ni Brothers</Logo>
      </Header>
      <Content>
        <Space direction="vertical">
          <div>Just two brothers working on some projects. Stay tuned...</div>
        </Space>
      </Content>
      <Footer>
        <div>Daniel and Derek Ni</div>
      </Footer>
    </Layout>
  </>
);

export default IndexPage;
