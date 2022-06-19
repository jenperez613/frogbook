import {google} from 'googleapis'
import nodemailer from "nodemailer";

const {OAuth2} = google.auth
const oauth_link="https://developers.google.com/oauthplayground"

const {EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH_TOKEN} = process.env;

const auth = new OAuth2(MAILING_ID, MAILING_SECRET, MAILING_REFRESH_TOKEN, oauth_link);

export const sendVerificationEmail =(email, name, url) => {
    auth.setCredentials({
        refresh_token:MAILING_REFRESH_TOKEN,
    })
    const accessToken = auth.getAccessToken()
    const smtp = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "Oauth2",
            user: EMAIL,
            clientID: MAILING_ID,
            clientSecret: MAILING_SECRET,
            refreshToken: MAILING_REFRESH_TOKEN,
            accessToken,
        }
    })
    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: "frogBook email verification",
        html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto,Arial,sans-serif;font-weight:600;color:#3b5998"><img src="https://www.dropbox.com/s/krh2x4dgrto2m8g/frog.svg?raw=1" style="width:30px" alt=""><span>Action required: Activate your frogBook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto,Arial,sans-serif"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on frogBook. To complete your registration, please confirm your account.</span></div><a href="${url}" style="padding:10px 15px;width:200px;background:#4c649b;color:#ffff;text-decoration:none;font-weight:600">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">frogBook lets you stay in touch with all your friends! Once registered on frogBook, you can share photos, organize events, and much more!</span></div></div>`,
    }
    smtp.sendMail(mailOptions, (err, res) => {
        if (err) return err;
        return res
    })
}