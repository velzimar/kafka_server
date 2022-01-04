
const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app2',
  brokers: [ 'localhost:9092']
})
 
const producer = kafka.producer()

const topic = "topic-xsq"
const run = async () => {

  // Producing
  await producer.connect()

 
  await producer.send({
    topic,
    messages: [
      { value: '1111' },
    ],
  })
/*
  await producer.send({
    topic,
    messages: [
      { value: '22222' },
    ],
  })
  await producer.send({
    topic,
    messages: [
      { value: '6666' },
    ],
  })
  await producer.send({
    topic,
    messages: [
      { value: '66667' },
    ],
  })
*/
process.exit()
}
 
run().catch(console.error)