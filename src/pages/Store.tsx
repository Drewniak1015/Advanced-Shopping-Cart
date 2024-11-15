import { Col, Row } from "react-bootstrap";
import storeItmes from "../data/items.json";
import StoreItem from "../Components/StoreItem";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItmes.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}></StoreItem>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
