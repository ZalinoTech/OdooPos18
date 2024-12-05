Here’s the updated `README.md` file with **POS Version 18** specifically mentioned:

---

# **Odoo POS Version 18 Customization**

Welcome to the **Odoo POS Version 18 Customization** repository! This project contains customizations for Odoo's Point of Sale (POS) module version 18, tailored to specific business requirements. Each version of the module introduces new features, improvements, or bug fixes.

---

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [License](#license)

---

## **Overview**
This project focuses on enhancing Odoo POS Version 18 by adding new functionalities and optimizing existing features. The customizations are versioned for better management and traceability.

---

## **Features**
### **Version 1.0**
- Initial release of `pos_custom`.
- Added custom discount functionality.
- Optimized product search in the POS interface.

### **Version 1.1**
- Introduced a bulk pricing feature for wholesale customers.
- Limited the number of items that can be added per order.

### **Upcoming Features**
- Support for multi-currency transactions.
- Integration with external payment gateways.
- Enhanced inventory tracking in POS.

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/ZalinoTech/OdooPos18.git
   ```
2. Navigate to the custom addons folder:
   ```bash
   cd /path/to/your/odoo/addons_custom
   ```
3. Place the `pos_custom` folder inside the Odoo addons directory.
4. Restart the Odoo server:
   ```bash
   ./odoo-bin -c odoo.conf
   ```
5. Update the app list and install the **POS Version 18 Custom** module from the Odoo backend.

---

## **Usage**
1. Enable the module from the Odoo backend.
2. Access the Point of Sale app in Odoo Version 18.
3. Configure the custom features as needed under the POS settings.
4. Test the new functionalities in the POS interface.

---

## **Versioning**
The project uses Git for version control. Each version corresponds to a specific branch:
- **Main Branch:** Stable releases.
- **Feature Branches:** Development of new features.

### **Release Tags**
- `v1.0`: Initial release of the POS Version 18 Custom module.
- `v1.1`: Bulk pricing and item limitation feature.

---

## **Contributing**
We welcome contributions to enhance the functionality of this module. Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---

## **License**
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## **Contact**
For questions or support, feel free to reach out:
- **Author**: Zahid Anwar (ZalinoTech)
- **Email**: [info@zalinotech.com](mailto:info@zalinotech.com)
- **GitHub**: [ZalinoTech](https://github.com/ZalinoTech)

---