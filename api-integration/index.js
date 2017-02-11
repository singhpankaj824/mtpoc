
var key = "29b005cdbc47b710fae6e0859c0e35e73cb716702abe9336beee2a7cc847842b";
var secret = "6350d693f3c4938628bc5d199a900102e11fd88fb99aeeee536b91fe07e3367f";

// Hash time and key with secret
var hash = "";
var epoch = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;
using(var hmac = new HMACSHA256(Encoding.ASCII.GetBytes(secret))) {
  var bytes = hmac.ComputeHash(Encoding.ASCII.GetBytes(key + epoch));
  hash = BitConverter.ToString(hash).Replace("-", "");
}
var token = string.Format("{0}_{1}_{2}", key, epoch, hash);

// send token as X-Deki-Client HTTP header to MindTouch API (WebRequest is used in this example)
var request = WebRequest.Create('https://success.example.com/@api/deki/pages/home/info');
request.Method = "GET";
request.Headers.Add('X-Deki-Client', token);
var response = request.GetResponse();
