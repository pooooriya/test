import { Col, Row } from "reactstrap";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/";
import { CardData } from "../data/mock";
const Index: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Row>
        <Col md={4} lg={3} sm={12}>
          <Card {...CardData} />
        </Col>
        <Col md={4} lg={3} sm={12}>
          <Card {...CardData} />
        </Col>
        <Col md={4} lg={3} sm={12}>
          <Card {...CardData} />
        </Col>
        <Col md={4} lg={3} sm={12}>
          <Card {...CardData} />
        </Col>
        <Col md={4} lg={3} sm={12}>
          <Card {...CardData} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
