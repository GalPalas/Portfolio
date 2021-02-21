import emailjs from "emailjs-com";

export default function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_rpt4fke",
      "template_63avg88",
      e.target,
      "user_YFTDTTWo7vRVl7ByQ5uSL"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
