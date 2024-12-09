from odoo import http
from odoo.http import request, Response
from datetime import datetime, timedelta

class ValidateEmpDiscount(http.Controller):

    @http.route('/pos/validate_emp_discount', type='json', auth='user', csrf=False, methods=["POST"])
    def validate_emp_discount(self, cnic):
        if not cnic.isdigit() or len(cnic) != 13:
            return {"success": False, "message": "Invalid CNIC. Must be 13 digits."}
        if cnic == '1234567891234':
            return {
                "success": True,
                "message": "Validation successful!",
            }
        else:
            return {"success": False, "message": f"No Employee Found with given CNIC: {cnic}"}
