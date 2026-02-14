import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch (error) {
      return res.status(400).json({ error: "Invalid JSON body" });
    }
  }

  const { phone } = payload || {};
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const response = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: phone, channel: "sms" });

    return res.status(200).json({ status: response.status });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

