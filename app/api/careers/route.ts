import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract expected fields (can be forwarded to email/storage later)
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      coverLetter: formData.get("coverLetter"),
      resume: formData.get("resume") instanceof File ? "uploaded" : null,
    };

    // Placeholder: integrate with email service or file storage here
    return NextResponse.json({ success: true, data: payload });
  } catch (error) {
    console.error("Careers form submission failed", error);
    return NextResponse.json(
      { success: false, error: "Failed to process submission" },
      { status: 500 },
    );
  }
}
