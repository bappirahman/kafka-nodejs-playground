import kafka from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting");
  await admin.connect();
  console.log("Admin connect success");

  console.log("Creating topic [rider-update");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Dosconnecting");
  await admin.disconnect();
  console.log("Admin disconnected");
}
init();
