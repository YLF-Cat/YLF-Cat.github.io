var posts=["OI2607/","ic_test/","icvibelua/","suyi1st/","cspslist/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };