# death-trip-site

Dark-themed site built with React, TypeScript, Motion and Lenis smooth scrolling. Made together with [Vadym Yabluchkin](https://github.com/VadimAndroid); we worked in separate branches (`dev_amadi`, `dev_vadim`) and merged through pull requests.

`contact-form-server/` is an Express endpoint that forwards the contact form through Resend, with rate limiting.

## Run

```bash
npm install
npm run dev
```

Contact form server (needs `.env` with `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO`):

```bash
cd contact-form-server
npm install
npm run dev
```
