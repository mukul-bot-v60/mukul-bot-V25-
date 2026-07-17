module.exports.config = {
  name: "replyBoss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAJIB",
  description: "Reply Boss Protection",
  commandCategory: "System",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const bossUID = "100049763741416"; // আপনার UID

  if (!event.messageReply) return;

  if (
    event.messageReply.senderID == bossUID &&
    event.senderID != bossUID
  ) {
    api.sendMessage(
      "🫡 কিরে খানকির পোলা, বসের মেসেজ টানিস কেন 🔪..!",
      event.threadID,
      event.messageID
    );
  }
};

module.exports.run = () => {};
