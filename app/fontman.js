/** Angular JS app
 *
 * Control main gui body.
 *
 * Created by Lahiru Pathirage @Mooniak <lpsandaruwan@gmail.com> on 11/28/16.
 */

var fontmanApp = angular.module("fontmanApp", [
    "fontsModule",
    "InlineTextEditor",
    "ngMaterial",
    "ngMessages",
    "ngRoute",
    "ngSanitize",
    "ui.validate"
]);


fontmanApp
    .config(function ($httpProvider, $locationProvider, $routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "views/fonts.html",
                controller: "fontsController"
            })
            .otherwise("/");
    });

fontmanApp
    .factory("fontSelectorService", function () {
        var font  = undefined;

        return {
            getSelectedFont: function () {
                return font;
            },

            selectFont: function (_font) {
                font = _font;
            }
        }
    });
