const IncomingForm = require("formidable").IncomingForm;

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.on("file", (field, file) => {
      res.json({ message: 'WELCOME' });
      // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
      console.log(file.pathname)
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
