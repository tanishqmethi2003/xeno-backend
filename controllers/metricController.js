const { getDB } = require("../config/db");

const calculateMetrics = async (req, res) => {
  const db = getDB();
  try {
    // Step 1: Calculate Total Customers
    const totalCustomers = await db.collection("customers").countDocuments();

    // Step 2: Aggregate Total Sent Messages, Total Failed Messages, and Success Rate
    const campaignMetrics = await db.collection("communication_log").aggregate([
      {
        $group: {
          _id: null,
          totalSent: { $sum: "$sentCount" }, // Sum of all sent messages
          totalFailed: { $sum: "$failedCount" }, // Sum of all failed messages
        },
      },
      {
        $project: {
          _id: 0,
          totalSent: 1,
          totalFailed: 1,
          successRate: {
            $cond: [
              { $eq: [{ $add: ["$totalSent", "$totalFailed"] }, 0] },
              0,
              {
                $multiply: [
                  {
                    $divide: ["$totalSent", { $add: ["$totalSent", "$totalFailed"] }],
                  },
                  100,
                ],
              },
            ],
          },
        },
      },
    ]).toArray();

    // Extract metrics from aggregation result
    const { totalSent, totalFailed, successRate } = campaignMetrics[0] || {
      totalSent: 0,
      totalFailed: 0,
      successRate: 0,
    };

    // Send the response back to the client
    res.status(200).json({
      totalCustomers,
      totalSentMessages: totalSent,
      totalFailedMessages: totalFailed,
      successRate: successRate.toFixed(2) + "%",
    });
  } catch (err) {
    console.error("Error calculating metrics:", err);
    res.status(500).json({ error: "Failed to calculate metrics" });
  }
};

module.exports = { calculateMetrics };
