import { NextResponse } from "next/server";
import { google, sheets_v4 } from "googleapis";
import { JWT } from "google-auth-library";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.SHEET_ID;

async function getAuth(): Promise<JWT> {
  return new google.auth.JWT({
    keyFile: path.join(
      process.cwd(),
      "src/config/ffcs-440118-da1f5a10df1c.json"
    ),
    scopes: SCOPES,
  });
}

async function appendEmailToSheet(email: string) {
  const authClient = await getAuth();
  const sheets: sheets_v4.Sheets = google.sheets({
    version: "v4",
    auth: authClient,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Sheet1!A:A",

    valueInputOption: "RAW",
    requestBody: {
      values: [[email]],
    },
  });
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await appendEmailToSheet(email);
    return NextResponse.json({ message: "Email added successfully" });
  } catch (error) {
    console.error("Error adding email:", error);
    return NextResponse.json({ error: "Failed to add email" }, { status: 500 });
  }
}
