var posts=["cspslist/","OI2607/","ic_test/","suyi1st/","icvibelua/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };