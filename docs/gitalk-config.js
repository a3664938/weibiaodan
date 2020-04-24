
var gitalk = new Gitalk({
  "clientID": "100cc43a26a6aefa3006",
  "clientSecret": "3f8bbe3e213470d3d1620dfdd728a8a432cfee90",
  "repo": "weibiaodan",
  "owner": "a3664938",
  "admin": ["a3664938"],
  "id": md5(window.location.pathname),
  "distractionFreeMode": false
});
gitalk.render("gitalk-container");