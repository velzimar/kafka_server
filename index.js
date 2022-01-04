//admin create topic
/*
const fs = require('fs')
const ip = require('ip')
const { Kafka } = require('kafkajs')

const host = "localhost"

const kafka = new Kafka({
  logLevel: "INFO",
  brokers: [`${host}:9092`],
  clientId: 'test-admin-id',
  
  ssl: {
    servername: 'localhost',
    rejectUnauthorized: false,
    ca: [fs.readFileSync('./testHelpers/certs/cert-signed', 'utf-8')],
  },
  sasl: {
    mechanism: 'plain',
    username: 'test',
    password: 'testtest',
  },
})

const topic = 'topic-test1'

const admin = kafka.admin()

const run = async () => {
  await admin.connect()
  await admin.createTopics({
    topics: [{ topic }],
    waitForLeaders: true,
  })
  await admin.createPartitions({
    topicPartitions: [{ topic: topic, count: 3 }],
  })
}

run().catch(e => console.log(e))
*/

const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app2',
  brokers: [ 'localhost:9092']
})
 
const consumer = kafka.consumer({ groupId: 'test-group' })
const consumer2 = kafka.consumer({ groupId: 'test-group2' })
const consumer3 = kafka.consumer({ groupId: 'test-group3' })
/*
const consumer0 = kafka.consumer({ groupId: 'test-group2' })
const consumer02 = kafka.consumer({ groupId: 'test-group2' })
const consumer03 = kafka.consumer({ groupId: 'test-group2' })

const admin = kafka.admin()
*/
const topic = "topic-xsq"
const run = async () => {
/*
  await admin.connect()
  await admin.createTopics({
    topics: [{ topic }],
    waitForLeaders: true,
  })
  await admin.createPartitions({
    topicPartitions: [{ topic: topic, count: 3 }],
  })
*/
  /*
  await admin.disconnect()
  process.exit(0)
*/

  // Producing
 
  // consumers connect subscribe
  await consumer.connect()
  await consumer.subscribe({ topic/*, fromBeginning: true*/ })
  await consumer2.connect()
  await consumer2.subscribe({ topic, /*fromBeginning: true*/ })
  await consumer3.connect()
  await consumer3.subscribe({ topic, /*fromBeginning: true*/ })

/*
  await consumer0.connect()
  await consumer0.subscribe({ topic })
  await consumer02.connect()
  await consumer02.subscribe({ topic })
  await consumer03.connect()
  await consumer03.subscribe({ topic,  })
*/

 // consumers running
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer1")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  await consumer2.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer2")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  await consumer3.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer3")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })



/*
  await consumer0.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer01")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  await consumer02.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer02")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  await consumer03.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("consumer03")
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  */
}
 
run().catch(console.error)