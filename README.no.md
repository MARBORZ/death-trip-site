# death-trip-site

[English](README.md) · Norsk

Eksperiment med mørk estetikk. React, TypeScript, Motion for animasjoner, Lenis for smooth scroll. Ville prøve å lage noe stemningsfullt.

Laget sammen med [Vadym Yabluchkin](https://github.com/VadimAndroid). Hver av oss hadde egen branch (`dev_amadi`, `dev_vadim`), merget via pull requests.

`contact-form-server/` – Express-endepunkt for kontaktskjemaet, sender via Resend.

## Kjør

```bash
npm install
npm run dev
```

Skjemaserveren trenger `.env` med `RESEND_API_KEY`, `FROM_EMAIL`, `MAIL_TO`:

```bash
cd contact-form-server
npm install
npm run dev
```
