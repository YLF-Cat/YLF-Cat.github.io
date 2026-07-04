var posts=["ic_test/","OI2607/","welcome/","cspslist/","suyi1st/","icvibelua/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };