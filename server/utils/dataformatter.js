module.exports = {

  breakUpPerSkin : (document) => {
    var res = [];
    document.skins.forEach((ele) => {
      res.push(
        {
          item : document.name,
          skin : ele
        }
      )
    });
    return res;
  }

};
