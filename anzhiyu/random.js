var posts=["cspslist/","OI2607/","icvibelua/","welcome/","ic_test/","suyi1st/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };