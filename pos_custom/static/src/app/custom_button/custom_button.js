/**@odoo-module **/
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { patch } from "@web/core/utils/patch";
import { TextInputPopup } from "@pos_custom/app/custom_popup/text_input_popup";

import { rpc } from "@web/core/network/rpc";


patch(ControlButtons.prototype, {
    async onClickPopupSingleField() {
        this.dialog.add(TextInputPopup, {

            title: _t("To Apply Discount, Enter CNIC"),
            placeholder: _t("Enter CNIC"),
            getPayload: async (code) => {
                let cnic = code.trim();

                // Validation Logic
                if (cnic.length !== 13 || isNaN(cnic)) {
                    this.dialog.add(AlertDialog, {
                        title: _t("CNIC ERROR"),
                        body: _t("CNIC must be a 13-digit number without dashes"),
                    });
                    return;
                }

                const order = this.pos.get_order();
                const orderLines = order.get_orderlines();
                try {
                    const result = await rpc(
                        "/pos/validate_emp_discount",
                        { cnic },
                    );
                    if (result.success) {
                        orderLines.forEach(line => {
                            //line.set_unit_price(line.product_id.price_for_employee || line.product_id.lst_price); // Update the price
                            line.set_unit_price(line.product_id.price_for_employee || line.product_id.lst_price); // Update the price
                        });
//                        order.cnic = cnic;
                    } else {
                         this.dialog.add(AlertDialog, {
                            title: _t("ERROR"),
                            body: _t(result.message),
                        });
                        return;
                    }
                } catch (error) {
                    this.dialog.add(AlertDialog, {
                            title: _t("SYSTEM ERROR"),
                            body: _t("Currently, some services are unavailable. Please wait for a while and try again. If the issue persists for an extended period, please contact the administrator."),
                        });
                        return;
                }

               console.log('Ready to use cnic:',cnic);
            },
        });
    },
});
