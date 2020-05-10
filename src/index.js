import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emoji from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

/*var meaningstr=emoji.map(function(entries){
  return entries.meaning.substr(0,50)

});
console.log(meaningstr);*/
function TrimMsg(entries) {
  return entries.meaning.substr(0, 50);
}
var msg = emoji.map(TrimMsg);
console.log(msg);
