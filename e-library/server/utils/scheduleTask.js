import { Agenda } from "@hokify/agenda";
import sendEmail from "./sendEmail.js";

const mongoConnectionString = "mongodb+srv://mdfaizaann:FaizanCodeForIndiaA23@faizan.r6pzw5j.mongodb.net/cfi-a23";

const agenda = new Agenda({ db: { address: mongoConnectionString } });
agenda.define(
  'send email report',
  async (job) => {
    console.log(job.attrs.data.emailBody);
    await sendEmail(job.attrs.data.emailBody);
  }
);

(async function () {
  try {
    await agenda.start();
    await agenda.schedule(
      'Thu Oct 05 2023 19:55:00 GMT+0530 (India Standard Time)',
      'send email report',
      {
        emailBody: {
          to: "faizanconnectt@gmail.com",
          subject: "We are Learning Agenda",
          html: "<h1>This is a Scheduled Email</h1>"
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
  }
})();





