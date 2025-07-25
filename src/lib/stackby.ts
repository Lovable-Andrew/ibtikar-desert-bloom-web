// Utility to send contact form data to Stackby
// Usage: await sendContactToStackby(formData)
export async function sendContactToStackby(data: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: string;
}) {
  const API_KEY = import.meta.env.VITE_STACKBY_API_KEY;
  const STACK = import.meta.env.VITE_STACKBY_STACK;
  const TABLE = import.meta.env.VITE_STACKBY_TABLE;
  if (!API_KEY || !STACK || !TABLE) throw new Error("Stackby API config missing");
  const url = `https://api.stackby.com/v1/stacks/${STACK}/tables/${TABLE}/rows`;
  const today = new Date().toLocaleDateString('en-GB');
  const payload = {
    "Contact ID": "", // Let Stackby auto-generate or leave blank
    "Full Name": data.fullName,
    "Email Address": data.email,
    "Phone Number": data.phone,
    "Date of Inquiry": today,
    "Subject": data.subject,
    "Message": data.message,
    "Preferred Contact Method": data.preferredContact,
    "Status": "New"
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json",
      "Authorization": API_KEY
    },
    body: JSON.stringify({ row: payload })
  });
  if (!res.ok) throw new Error("Failed to submit contact to Stackby");
  return await res.json();
}
