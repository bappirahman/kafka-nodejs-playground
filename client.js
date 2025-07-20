import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "kafka-nodejs-playground",
  brokers: ["192.168.10.158:9092"],
});

export default kafka;
