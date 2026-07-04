var posts=["suyi1st/","OI2607/","ic_test/","cspslist/","welcome/","icvibelua/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };