/**
 * @file jquery.translate.js
 * @brief jQuery plugin to translate text in the client side.
 * @author Manuel Fernandes
 * @site
 * @version 0.9
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 *
 * translate.js is a jQuery plugin to translate text in the client side.
 *
 */
!function(t){t.fn.translate=function(n){var a=this,s={css:"trn",lang:"en"};0!==(s=t.extend(s,n||{})).css.lastIndexOf(".",0)&&(s.css="."+s.css);var r=s.t;return this.lang=function(t){return t&&(s.lang=t,this.translate(s)),s.lang},this.get=function(t){var n=t;try{n=r[t][s.lang]}catch(n){return t}return n||t},this.g=this.get,this.find(s.css).each((function(n){var s=t(this),r=s.attr("data-trn-key");r||(r=s.html(),s.attr("data-trn-key",r)),s.html(a.get(r))})),this}}(jQuery);