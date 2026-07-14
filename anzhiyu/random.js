var posts=["cspslist/","suyi1st/","ic_test/","icvibelua/","OI2607/","welcome/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };