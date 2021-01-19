const contactForm = document.querySelector("#contact-form");

const sending_email = async (FD) => {
  const stringified = await JSON.stringify(Object.fromEntries(FD));
  let res = await fetch("http://localhost:1000/api/contact/email", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: stringified,
  });
  let data = await res.json();
  console.log(data);
};

const sending_sms = async (phone_number) => {
  let res = await fetch("http://localhost:1000/api/contact/sms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ phone_number }),
  });
  let data = await res.json();
  console.log(data);
};

contactForm.addEventListener("submit", async (e) => {
  await e.preventDefault();
  try {
    const FD = await new FormData(contactForm);
    await sending_email(FD);
    await sending_sms(contactForm.elements["phone"].value);
    contactForm.reset();
  } catch (error) {
    console.log(error);
  }
});
