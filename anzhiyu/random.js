var posts=["2025/06/03/ic_test/","2025/08/03/suyi1st/","2025/05/04/welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };