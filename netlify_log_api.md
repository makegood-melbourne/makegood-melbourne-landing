# How to Access Netlify Build Logs via API

Source: [Netlify Developers Guide](https://developers.netlify.com/guides/deploy-zip-file-to-production-website/#surface-deploy-logs)

## 1. Get a Short-Lived Access Token

To access the logs, you first need a short-lived JWT. This is obtained by making a GET request to the following endpoint, authenticated with your main Personal Access Token (PAT).

**Endpoint:**
`https://app.netlify.com/access-control/generate-access-control-token`

**Parameters:**
- `deploy_id`: The ID of the specific deploy you want logs for.
- `site_id`: The ID of the site.

**Example Request:**
```bash
curl -H "Authorization: Bearer <YOUR_PERSONAL_ACCESS_TOKEN>" \
"https://app.netlify.com/access-control/generate-access-control-token?deploy_id=<DEPLOY_ID>&site_id=<SITE_ID>"
```

## 2. Connect to the WebSocket

Once you have the short-lived `access_token` from the previous step, you can connect to the WebSocket to stream the logs.

**WebSocket URL:**
`wss://socketeer.services.netlify.com/build/logs`

**Connection Payload:**
After connecting, you must immediately send a JSON payload containing:
- `access_token`: The short-lived JWT from step 1.
- `deploy_id`: The ID of the deploy.
- `site_id`: The ID of the site.

**Example JavaScript:**
```javascript
const ws = new WebSocket("wss://socketeer.services.netlify.com/build/logs");

ws.onopen = () => {
  ws.send(JSON.stringify({
    access_token: "<SHORT_LIVED_ACCESS_TOKEN>",
    deploy_id: "<DEPLOY_ID>",
    site_id: "<SITE_ID>"
  }));
};

ws.onmessage = (event) => {
  console.log(event.data);
};
```
```
