var posts=["icvibelua/","cspslist/","ic_test/","OI2607/","suyi1st/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };