import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tabs, Tab, Card } from 'react-bootstrap';
import { storeData } from './data';

function App() {
  const [key, setKey] = useState('mie');

  const today = new Date();
  const dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  return (
    <Container className="p-3">
      <header className="text-center mb-4">
        <h1>パチンコ・スロットおすすめ店舗</h1>
        <p>{dateString}</p>
      </header>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="mie" title="三重県">
          {storeData.mie.map((store, index) => (
            <Card key={index} className="mb-3">
              <Card.Header as="h5">{store.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>場所:</strong> {store.address}<br />
                  <strong>おすすめ理由:</strong> {store.recommendation}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
        <Tab eventKey="aichi" title="愛知県">
          {storeData.aichi.map((store, index) => (
            <Card key={index} className="mb-3">
              <Card.Header as="h5">{store.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>場所:</strong> {store.address}<br />
                  <strong>おすすめ理由:</strong> {store.recommendation}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;