import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT!
  ),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export interface Guest {
  token: string
  name: string
  numOfGuests: number
  isAttending?: boolean
  notes?: string
}

export async function getGuest(
  token: string
): Promise<Guest | null> {
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Guests!A:E",
  });

  const rows = result.data.values ?? [];

  const row = rows.find(
    (row): row is string[] => row[0] === token
  );

  if (!row) {
    return null;
  }

  return {
    token: row[0],
    name: row[1],
    numOfGuests: Number(row[2]),
    isAttending:
      row[3] === undefined
        ? undefined
        : row[3].toLowerCase() === "true",
    notes: row[4]
  };
}

export async function updateRSVP(token: string, isAttending: boolean, note: string) {
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Guests!A:E", // Ensure range covers column E for notes
  });

  const rows = result.data.values ?? [];
  const rowIndex = rows.findIndex((row) => row[0] === token);

  if (rowIndex === -1) throw new Error("Guest not found");

  const sheetRow = rowIndex + 1;

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: `Guests!D${sheetRow}:E${sheetRow}`, // Updating Attendance (D) and Note (E)
    valueInputOption: "RAW",
    requestBody: {
      values: [[String(isAttending), note]],
    },
  });

  return { success: true };
}