
from odoo import api, fields, models, _
from odoo.exceptions import UserError

class HrEmployee(models.Model):
    _inherit = 'hr.employee'

    cnic = fields.Char('CNIC')
