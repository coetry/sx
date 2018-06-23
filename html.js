module.exports = ({html, scripts}) =>
  `<!DOCTYPE html>
    <html>
    <head>
      <title>bismilLah</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #000;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        }
      </style>
    </head>
    <body>
      <div id="root">${html}</div>
      ${scripts}
    </body>
    </html>
  `
