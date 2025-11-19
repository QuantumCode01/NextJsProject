import { verifyCredentials, setAuthCookie } from "../../lib/auth";
import validator from "validator";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const email = validator.normalizeEmail(req.body.email);
  const password = req.body.password.trim();
  console.log(email,password);

  const ok = await verifyCredentials(email, password);

  if (!ok) return res.status(401).json({ ok: false });

  setAuthCookie(res);
  res.json({ ok: true });
}
