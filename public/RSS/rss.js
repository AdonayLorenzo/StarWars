const generateRssFeed = async () => {
    const chatDataResponse = await chatData.getChat();
    const rss = `
      <rss version="2.0">
        <channel>
          <title>Chat Feed</title>
          <link>https://starwars-e2a16.web.app/Chat</link>
          <description>Chat messages from your application</description>
          <language>en-us</language>
          ${chatDataResponse
          .map(
              (item) => `
            <item>
              <title>${item.name}</title>
              <description>${item.message}</description>
              <pubDate>${new Date(item.timestamp).toUTCString()}</pubDate>
              <link>https://starwars-e2a16.web.app/Chat/${item.id}</link>
            </item>
          `
            )
          .join("")}
        </channel>
      </rss>
    `;
  
    return rss;
  };