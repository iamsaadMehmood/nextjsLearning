import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}
function extractData(filePath: string) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
//   console.log(allEvents);
  if (!allEvents) {
    return res.status(404).json({
      message: "No data Found",
      status: 404,
    });
  }
  if (req.method === "POST") {
    const { email, eventId } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    const newAllEvents = allEvents.map((ev: any) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(400)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}
