var posts=["2026/03/01/icvibelua/","2025/05/04/welcome/","2025/08/03/suyi1st/","2025/10/15/cspslist/","2025/06/03/ic_test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };