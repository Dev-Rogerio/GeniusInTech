export async function sendLead({ name, email, message }) {
  const response = await fetch("/.netlify/functions/sendLeadEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao enviar lead");
  }

  return data;
}
