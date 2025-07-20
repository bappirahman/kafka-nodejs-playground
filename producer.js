import kafka from "./client.js";

async function init() {
  const producer = kafka.producer();
  console.log("Connecting producer");
  await producer.connect();
  console.log("Producer connected");

  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        key: "location-update",
        value: JSON.stringify({ name: "Bappi Rahman", loc: "dhaka-south" }),
        partition: 0,
      },
    ],
  });
  producer.disconnect();
  console.log("Producer disconnected");
}

init();
