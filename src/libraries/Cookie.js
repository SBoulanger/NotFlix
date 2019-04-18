import Cookies from 'js-cookie';

/*Cookies API
   Available functions are create(automaticID), destroy(), exists(), get()
   Example use:

   var myCookie = Cookie;
   myCookie.create('id_here'); // to create cookie
   console.log(myCookie.get()); // to print id to console
   console.log(myCookie.exists()); // prints 'true' to console
   myCookie.destroy(); // to destroy cookie

        */

var Cookie = (function() {

        /* *** PRIVATE *** */
        let CookieFunctions = {};
        let c = Cookies;
        let exist = false;

        let set = function(authID) {
                c.set('authID',authID);
       }

        let remove = function(){
                c.remove('authID');
        }

        let get = function(){
                 if (exist)  {return c.get('authID'); }
                else {return null}
        }

        /* ***  *** */

         /* Create cookie using authentification ID. If successful, returns true.*/
        CookieFunctions.create = function(authID){
                if (authID == undefined) {
                        console.log('Must pass in ID as argument');
                        return false;
                }
                if (!exist) {
                        exist = true;
                        set(authID);
                }
                return exist;
        }

        /* Destroy cookie. */
        CookieFunctions.destroy = function(){
                exist = false;
                return remove();
        }

        /* If cookie exists, returns true. */
        CookieFunctions.exists = function(){
                return exist;
        }

         /* Returns authentification ID if cookie exists. If cookie does not exist, returns null. */
        CookieFunctions.get = function(){
               return get();
        }

        return CookieFunctions;
})();

export default Cookie;
