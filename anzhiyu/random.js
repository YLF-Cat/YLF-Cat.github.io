var posts=["2025/05/04/welcome/","2025/06/03/ic_test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };