const express = require('express')

const app = express();

app.get('/',(req, res)=>{
    res.send(`
        <!DOCTYPE html>
<html>
<body>
<h1> Hello seif.....,</h1><br>
<h2>Text input fields</h2>

<form>
  <label for="fname">Firs tname:</label><br>
  <input type="text" id="fname" name="fname" value="seif"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="ashraf">
</form>
<p>Note that the form itself is not visible.</p>
<p>Also note that the default width of text input fields is 20 characters.</p>
</body>
</html>`);
});

app.listen(4000, ()=>{
    console.log('server run in localhost:4000');
})