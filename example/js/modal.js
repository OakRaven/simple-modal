/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
var Modal;
(function (Modal) {
    "use strict";
    var Dialog = (function () {
        function Dialog(dialogElementId, overlayElementId, options) {
            if (overlayElementId === void 0) { overlayElementId = "overlay"; }
            if (options === void 0) { options = {}; }
            this.dialogElementId = dialogElementId;
            this.overlayElementId = overlayElementId;
            this.options = options;
        }
        Dialog.prototype.Open = function () {
            $("#" + this.dialogElementId).css("z-index", 1000).css("position", "absolute").show();
            $("#" + this.overlayElementId).css("z-index", 0).css("background-color", this.options.backgroundColor || "#000").css("opacity", this.options.opacity || 0.5).css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", $(window).height()).show();
            this.Center();
        };
        Dialog.prototype.Close = function () {
            $("#" + this.dialogElementId).hide();
            $("#" + this.overlayElementId).hide();
        };
        Dialog.prototype.Center = function () {
            var top, left, $dialogElement = $("#" + this.dialogElementId);
            top = Math.max($(window).height() - $dialogElement.outerHeight(), 0) / 2;
            left = Math.max($(window).width() - $dialogElement.outerWidth(), 0) / 2;
            $dialogElement.css({
                top: top + $(window).scrollTop(),
                left: left + $(window).scrollLeft()
            });
        };
        return Dialog;
    })();
    Modal.Dialog = Dialog;
})(Modal || (Modal = {}));
//# sourceMappingURL=modal.js.map