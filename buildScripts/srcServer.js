import express from "express";
import path from "path";
import open from "open";

const port = process.env.port || 3002;

const app = express();

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
