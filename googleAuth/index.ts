import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware for JSON parsing
app.use(bodyParser.json());

// Replace with your Telegram bot token
const botToken = '6453546195:AAHVKOkQp8KciQg7IPEKt2RbKjEZYK6rSzI';

// Handle the route where the Telegram Login Widget is embedded
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Telegram Login Widget Example</title>
    </head>
    <body>
        <!-- Telegram Login Widget -->
        <script async src="https://telegram.org/js/telegram-widget.js?5"
                data-telegram-login="arjit_login_bot"
                data-size="large"
                data-radius="10"
                data-auth-url="/auth"></script>
    </body>
    </html>
  `);
});

// Handle the Telegram authentication callback
app.post('/auth', (req, res) => {
  const { auth_date, first_name, id, last_name, photo_url, hash } = req.body;

  // Validate and verify the received data, including the hash.
  // You should follow Telegram's documentation for the exact validation steps.

  // Calculate the expected hash using your bot token
  const data = Object.entries(req.body)
    .filter(([key, value]) => key !== 'hash')
    .map(([key, value]) => `${key}=${value}`)
    .sort()
    .join('\n');

  const calculatedHash = require('crypto')
    .createHmac('sha256', botToken)
    .update(data)
    .digest('hex');

  if (hash !== calculatedHash) {
    console.error('Telegram authentication error: Hash mismatch');
    return res.status(500).json({ error: 'Authentication failed' });
  }

  // Verify the authenticity of the data with the Telegram API
  // (You can fetch user details using the Telegram Bot API based on the received user ID)

  // Here, you can access user's profile photos, name, and other data from the req.body.

  // You may also want to store user data in your database.

  // Send a response back to the client to indicate successful authentication.
  res.json({ message: 'Authentication successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
