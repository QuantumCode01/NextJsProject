import cookie from "cookie";
import bcrypt from "bcryptjs";

// Hardcoded user credentials
export const USER = {
  email: "test@example.com",
  passwordHash: "SuperSecret123" // "SuperSecret123"
};

// Set login cookie
export function setAuthCookie(res) {
  res.setHeader("Set-Cookie",
    cookie.serialize("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      sameSite: "lax",
      path: "/",
    })
  );
}

// Clear login cookie
export function clearAuthCookie(res) {
  res.setHeader("Set-Cookie",
    cookie.serialize("auth", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    })
  );
}

// Check if user is authenticated
export function isAuthenticated(req) {
  const cookies = cookie.parse(req.headers.cookie || "");
  return cookies.auth === "true";
}

// Verify credentials
export async function verifyCredentials(email, password) {
    console.log(email !== USER.email, password !== USER.passwordHash)
  if (email !== USER.email) return false;
  if (password !== USER.passwordHash) return false;
  return true;
}
