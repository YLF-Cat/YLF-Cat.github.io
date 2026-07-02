var posts=["OI2607/","cspslist/","suyi1st/","ic_test/","icvibelua/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };