
    /**
     * ⑬scroll control
     */


    /**
     * func not to scroll
     */
    function scroll_control(event) {
      event.preventDefault();
    }

    /**
     * prohibit scrolling
     */
    var noScroll = () => {
      // prohibit in PC
      document.addEventListener("mousewheel", scroll_control, {
        passive: false
      });
      // prohibit in SP
      document.addEventListener("touchmove", scroll_control, {
        passive: false
      });
    }

    /**
     * accepting scrolling
     */
    var yesScroll = () => {
      // accepting in PC
      document.removeEventListener("mousewheel", scroll_control, {
        passive: false
      });
      // accepting in SP
      document.removeEventListener("touchmove", scroll_control, {
        passive: false
      });
    }
