var posts=["OI2607/","suyi1st/","ic_test/","cspslist/","welcome/","icvibelua/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };