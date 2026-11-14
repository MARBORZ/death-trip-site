# death-trip-site

English · [Norsk](README.no.md)

Experiment with a dark aesthetic. React, TypeScript, Motion for animations, Lenis for smooth scroll. Wanted to try building something moody.

Made together with [Vadym Yabluchkin](https://github.com/VadimAndroid). Each of us had own branch (`dev_amadi`, `dev_vadim`), merged through pull requests.

`contact-form-server/` – Express endpoint for the contact form, sends through Resend.

## Run

```bash
npm install
npm run dev
```

Form server needs `.env` with `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO`:

```bash
cd contact-form-server
npm install
npm run dev
```
