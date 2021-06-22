
module.exports = ( element ) => {
      let doit;
      element.onresize = ( delayTime ) => {
            clearTimeout(doit);
            doit = setTimeout( () => {
                 location.reload();
            } , 100 );
      }
}
