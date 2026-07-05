var posts=["OI2607/","icvibelua/","welcome/","suyi1st/","cspslist/","ic_test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };