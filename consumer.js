import kafka from "./client.js";

async function init() {
  const consumer = kafka.consumer({ groupId: "basic-group" });
  await consumer.connect();
  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `Got a new message on topic of ${topic} partition is ${partition} and the message is ${message.value.toString()}`
      );
    },
  });
}

init();
