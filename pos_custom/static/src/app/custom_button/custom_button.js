/**@odoo-module **/
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { patch } from "@web/core/utils/patch";
import { TextInputPopup } from "@pos_custom/app/custom_popup/text_input_popup";

patch(ControlButtons.prototype, {
    async onClickPopupSingleField() {
        this.dialog.add(TextInputPopup, {
            title: _t("To Apply Discount, Enter CNIC & Code"),
            placeholder: _t("Enter CNIC"),
            getPayload: async (code,code2) => {
                let cnic = code.trim();

               console.log('Ready to use cnic: ',cnic);
            },
        });
    },
});