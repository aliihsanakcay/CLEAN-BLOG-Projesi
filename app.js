const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };

  res.send(blog);
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server port ${port} de başladı..`);
});
