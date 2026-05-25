const https = require('https');

https.get('https://thcvapestore.uk/shop/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const products = [];
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = new Set();
    while ((match = regex.exec(data)) !== null) {
      if (match[1].includes('uploads')) images.add(match[1]);
    }
    
    const titleRegex = /<h2 class="woocommerce-loop-product__title">([^<]+)<\/h2>/g;
    const titles = [];
    while ((match = titleRegex.exec(data)) !== null) {
      titles.push(match[1]);
    }

    console.log(JSON.stringify({
       titles: titles,
       images: Array.from(images)
    }, null, 2));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
