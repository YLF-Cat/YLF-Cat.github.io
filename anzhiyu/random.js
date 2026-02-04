var posts=["2025/10/15/cspslist/","2026/01/24/daily_prologue/","2026/01/25/daily_25_1/","2026/02/01/daily_25_2/","2025/06/03/ic_test/","2025/08/03/suyi1st/","2025/05/04/welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };