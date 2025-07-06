
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tabs, Tab, Card, Button, Badge } from 'react-bootstrap';
import { storeData } from './data';

// スコアで降順にソートする関数
const sortStores = (stores) => {
  return stores.sort((a, b) => b.recommendation.score - a.recommendation.score);
};

function App() {
  const [key, setKey] = useState('mie');

  const today = new Date();
  const dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  const renderStoreList = (prefecture) => {
    const sortedStores = sortStores(storeData[prefecture]);
    return sortedStores.map((store, index) => (
      <Card key={index} className="mb-3 shadow-sm">
        <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
          {store.name}
          <Badge bg="danger">おすすめ度: {store.recommendation.score}</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{store.address}</Card.Subtitle>
          <Card.Text>
            <strong>理由:</strong> {store.recommendation.reason}<br />
            <strong>詳細:</strong> {store.recommendation.details}
          </Card.Text>
          <Button variant="primary" href={store.websiteUrl} target="_blank" rel="noopener noreferrer">
            公式サイトへ
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container className="p-3">
      <header className="text-center mb-4">
        <h1>パチンコ・スロットおすすめ店舗</h1>
        <p className="lead">{dateString}の優良店予測</p>
      </header>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
      >
        <Tab eventKey="mie" title="三重県">
          {renderStoreList('mie')}
        </TAb>
        <Tab eventKey="aichi" title="愛知県">
          {renderStoreList('aichi')}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
