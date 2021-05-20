   /**
    * acync&await
    */

   import {
     init
   } from "browser-sync";

   var acync_init = async () => {
     acync_func1();
     await acync_func2();
     await acync_func3();
     await acync_func4();
   }


   // class構文で使う場合

   class Print {
     constructor() {}
     init() {
       this.acync_init();
     }
     async acync_init(top, left) {
       this.acync_func1();
       await this.acync_func2();
       await this.acync_func3();
     }
     acync_func1() {}
     acync_func2() {}
     acync_func3() {}
   }