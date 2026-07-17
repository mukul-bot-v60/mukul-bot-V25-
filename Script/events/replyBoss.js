module.exports.config = {
  name: "replyBoss",
  eventType: ["message_reply"],
  version: "1.0.0",
  credits: "SAJIB",
  description: "Reply warning"
};

module.exports.run = async function ({ api, event }) {
  const bossUID = "100049763741416"; // এখানে আপনার Facebook UID দিন

  if (
    event.messageReply &&
    event.messageReply.senderID == bossUID &&
    event.senderID != bossUID
  ) {
    return api.sendMessage(
      "🫡 কিরে খানকির পোলা, বসের মেসেজ টানিস কেন 🔪..!",
      event.threadID,
      event.messageID
    );
  }
};
