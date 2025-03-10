import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../Components/StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              {...item}
              imgUrl={`${import.meta.env.BASE_URL}/imgs/${item.imgUrl}`}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
