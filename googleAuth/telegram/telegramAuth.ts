export function telegramAuth(req:any,res:any){
const botUsername = 'arjit_login_bot';
const authUrl = 'http://localhost:2001/';

  return `
    <!-- Telegram Login Widget -->
    <script async src="https://telegram.org/js/telegram-widget.js?5"
            data-telegram-login="${botUsername}"
            data-size="large"
            data-radius="10"
            data-auth-url="${authUrl}"></script>
  `;
}