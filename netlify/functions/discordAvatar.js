// netlify/functions/discordAvatar.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const userId = event.queryStringParameters.userId;
  const botToken = 'MTI2MjM5MjA5NDI2MjMwMDcxNQ.GRgeyw.PagP9mAThIjFWGbZtbdTQjWaHJ-A3h5ZaKyXFY';

  try {
    const response = await fetch(`https://discord.com/api/users/${userId}`, {
      headers: {
        'Authorization': `Bot ${botToken}`
      }
    });
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to fetch avatar' })
      };
    }
    const data = await response.json();
    const avatarUrl = data.avatar 
      ? `https://cdn.discordapp.com/avatars/${userId}/${data.avatar}.png?size=1024`
      : 'https://cdn.discordapp.com/embed/avatars/0.png';

    return {
      statusCode: 200,
      body: JSON.stringify({ avatarUrl })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
