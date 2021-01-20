const contactForm = document.querySelector("#contact-form");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector("#my-modal");
const closeBtn = document.querySelector(".close");
const closeModal = () => {
  modalWrapper.style.display = "none";
  modal.style.display = "none";
};
const outsideClick = (e) => {
  if (e.target == modal) {
    modalWrapper.style.display = "none";
    modal.style.display = "none";
  }
};
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
const openModal = () => {
  modalWrapper.style.display = "flex";
  modal.style.display = "block";
};

const sending_email = async (FD) => {
  const stringified = await JSON.stringify(Object.fromEntries(FD));
  let res = await fetch("/api/contact/email", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: stringified,
  });
  let data = await res.json();
  console.log(data);
};

const sending_sms = async (phone_number) => {
  let res = await fetch("/api/contact/sms", {
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
    if (/^(05)\d{8}/.test(contactForm.elements["phone"].value)) {
      await sending_sms(contactForm.elements["phone"].value);
    }
    console.log(contactForm.elements["phone"].value);
    if (/^(9725)\d{7}/.test(contactForm.elements["phone"].value)) {
        await sending_sms(`0${contactForm.elements["phone"].value.substr(3)}`);
    }
    openModal();
    contactForm.reset();
  } catch (error) {
    console.log(error);
  }
});
