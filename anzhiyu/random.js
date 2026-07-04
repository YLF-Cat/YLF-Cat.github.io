var posts=["suyi1st/","cspslist/","welcome/","OI2607/","ic_test/","icvibelua/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };