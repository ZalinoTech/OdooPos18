{
    'name': 'POS Custom',
    'version': '1.0.0',
    'category': 'Point of Sale',
    'summary': "POS Custom, Odoo18, "
               "Odoo Apps",
    'description': "Design for better styles",
    'author': 'Zahid Anwar',
    'company': 'zalino',
    'maintainer': 'Nil',
    'website': 'https://www.zalinotech.com',
    'depends': ['base', 'point_of_sale','hr'],
    'data': [

        'views/product_template.xml',
        'views/hr_employee.xml',

    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_custom/static/src/app/custom_popup/text_input_popup.js',
            'pos_custom/static/src/app/custom_popup/text_input_popup.xml',

            'pos_custom/static/src/app/custom_button/custom_button.js',
            'pos_custom/static/src/app/custom_button/custom_button.xml',
        ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False
}
