
- Frontend served by Nginx as static files
- Backend runs on port `3001` (pm2)
- Nginx proxies `/api/*` -> backend

---

## Environment Variables

### Backend (.env)
Create `/var/www/bio-site-server/.env` (or set via pm2 ecosystem):

```env
PORT=3001
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
MAIL_TO=your@email.com
FROM_EMAIL=contact@your-domain.com
NODE_ENV=production
