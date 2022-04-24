
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app2',
  brokers: ['localhost:9092']
})
const producer = kafka.producer()
const topic = "PurshasedCoupons"
const run = async () => {
  await producer.connect()
  const s0 = {// add country, city
    "id": "cc5e9788-35ce-4d1f-8cd0-40e1d3f154a9",
    "seller_id": "619787b04fd2c342a68a16a9",
    "seller_address": "sss",
    "seller_country": "france",
    "seller_city": "paris",
    "sku": "1.5",
    "website": "www.example.com",
    "title": "seaaarchhh",//search
    "type": "ONLINE",
    "date_start": "2022-01-01T10:31:48.407Z",//consumer?
    "tags": [//search
      "tag125",
      "tag5"
    ],
    "size": "30",
    "product_type": "ONLINE",
    "init_price": "2555",
    "base_image": "www.myimage.com",
    "description": "descriptions"
  }
  const s = {
    "deal_id": "cc5e9788-35ce-4d1f-8cd0-40e1d3f154a8",
    "coupon_id": "223369R",//coupon_id
    "initPrice": 20,
    "lastPrice": 10,
    "rate": 50,
    "date_get": "2022-01-01T10:31:48.407Z",
    "buyer_id": "619787b04fd2c342a68a16a9",
    "tag": null,
  }
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(s)
      },
    ],
  })
  process.exit()
}

run().catch(console.error)