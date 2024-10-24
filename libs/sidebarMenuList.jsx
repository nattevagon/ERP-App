import { ChartBarSquareIcon, CircleStackIcon, Cog6ToothIcon, CurrencyDollarIcon, HomeIcon, HomeModernIcon, ReceiptPercentIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const SidebarMenuList = [
  {
    name: "Dashboard",
    icon: <HomeIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [],
    link: "/dashboard"
  },
  {
    name: "Purchase",
    icon: <ShoppingBagIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Vendor",
            link: "/purchase/master/vendor",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Purchase Request",
            link: "/purchase",
          },
          {
            name: "Purchase Order",
            link: "/purchase",
          },
          {
            name: "Good Received",
            link: "/purchase",
          },
          {
            name: "Invoice",
            link: "/purchase/transaction/invoice",
          },
          {
            name: "Purchase Return",
            link: "/purchase",
          },
          {
            name: "Debit Note",
            link: "/purchase",
          },
          {
            name: "Proforma Invoice",
            link: "/purchase",
          },
        ],
      },
      {
        name: "Report",
        subMenus: [
          {
            name: "Purchase Request",
            link: "/vendor",
          },
        ],
      },
    ],
  },
  {
    name: "Sales",
    icon: <ReceiptPercentIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Customer",
            link: "/sales/master/customer",
          },
          {
            name: "Group",
            link: "/sales/master/group",
          },
          {
            name: "Departemen",
            link: "/sales/master/departemen",
          },
          {
            name: "Expedition",
            link: "/sales/master/expedition",
          },
          {
            name: "Credit note",
            link: "/sales/master/credit-noted-type",
          },
          {
            name: "Salesman",
            link: "/sales/master/salesman",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Quatation",
            link: "/sales/transaction/quatation",
          },
          {
            name: "Sales Order",
            link: "/sales/transaction/sales-order",
          },
          {
            name: "Ship Planning",
            link: "/sales/transaction/internal-do",
          },
          {
            name: "Delivery Order",
            link: "/sales/transaction/ext-delivery",
          },
          {
            name: "Invoice",
            link: "/sales/transaction/invoice",
          },
          {
            name: "Sales Return",
            link: "/sales/transaction/sales-return",
          },
          {
            name: "Credit Noted",
            link: "/sales/transaction/credit-noted",
          },
          {
            name: "Prorforma Invoice",
            link: "/sales/transaction/proforma-invoice",
          },
        ],
      },
      {
        name: "Report",
        subMenus: [
          {
            name: "Quatation",
            link: "/sales/transaction/quatation",
          },
          {
            name: "Sales Order",
            link: "/sales/transaction/sales-order",
          },
          {
            name: "Ship Planning",
            link: "/sales/transaction/internal-do",
          },
          {
            name: "Delivery Order",
            link: "/sales/transaction/ext-delivery",
          },
          {
            name: "Invoice",
            link: "/sales/transaction/invoice",
          },
          {
            name: "Sales Return",
            link: "/sales/transaction/sales-return",
          },
          {
            name: "Credit Noted",
            link: "/sales/transaction/credit-noted",
          },
          {
            name: "Prorforma Invoice",
            link: "/sales/transaction/proforma-invoice",
          },
        ],
      },
    ],
  },
  {
    name: "Production",
    icon: <HomeModernIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Bom",
            link: "/production/master/bom",
          },
          {
            name: "Bom Group",
            link: "/production/master/bom-group",
          },
          {
            name: "Labour",
            link: "/production/master/bom-group",
          },
          {
            name: "Mesin",
            link: "/production/master/mesin",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Formulation Planning",
            link: "/production/transaction/formulation-planning",
          },
          {
            name: "Material Request Order",
            link: "/production/transaction/material-request-order",
          },
          {
            name: "Material Request Delivery",
            link: "/production/transaction/material-request-delivery",
          },
          {
            name: "Formulation Proses",
            link: "/production/transaction/formulation-process",
          },
          {
            name: "Formulation Receiving",
            link: "/production/transaction/formulation-receiving",
          },

          {
            name: "Product Analysis",
            link: "/production/transaction/product-analysis",
          },
          // {
          //   name: "Product Trial optionan",
          //   link: "/purchase",
          // },
        ],
      },
    ],
  },
  {
    name: "Inventory",
    icon: <CircleStackIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Adjusmet Type",
            link: "/inventory/master/adjusment-type",
          },
          {
            name: "Location",
            link: "/inventory/master/location",
          },
          {
            name: "Parameter",
            link: "/inventory/master/parameter",
          },
          {
            name: "Product",
            link: "/inventory/master/product",
          },
          {
            name: "Product Category",
            link: "/inventory/master/product-category",
          },
          {
            name: "Product Type",
            link: "/inventory/master/product-type",
          },
          {
            name: "Uom",
            link: "/inventory/master/uom",
          },
          {
            name: "Warehouse",
            link: "/inventory/master/warehouse",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Adjusment",
            link: "/purchase",
          },
          {
            name: "Begining Balance",
            link: "/inventory/transaction/begining-balance",
          },
          {
            name: "Inventory Sample",
            link: "/inventory/transaction/inventory-sample",
          },
          {
            name: "Memo Return",
            link: "/inventory/transaction/memo-return",
          },
          {
            name: "Purchase Barter In",
            link: "/inventory/transaction/purchase-barter-in",
          },
          {
            name: "Purchase Barter Out",
            link: "/inventory/transaction/purchase-barter-out",
          },
          {
            name: "Sales Barter In",
            link: "/inventory/transaction/sales-barter-in",
          },
          {
            name: "Sales Barter Out",
            link: "/inventory/transaction/sales-barter-out",
          },
          {
            name: "Stock Opname",
            link: "/inventory/transaction/stop-opname",
          },
          {
            name: "Transfer Warehouse",
            link: "/purchase",
          },
        ],
      },
      {
        name: "Information",
        subMenus: [
          {
            name: "Product Cogs",
            link: "/purchase",
          },
          {
            name: "Product Status",
            link: "/purchase",
          },

        ],
      },
    ],
  },
  {
    name: "Cash & Bank",
    icon: <CurrencyDollarIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Bank",
            link: "/cash&bank/master/bank",
          },
          {
            name: "Cash",
            link: "/cash&bank/master/cash",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Bank",
            link: "/cash&bank/transaction/bank",
          },
          {
            name: "Cash",
            link: "/cash&bank/transaction/cash",

          },
          {
            name: "Cost Request",
            link: "/cash&bank/transaction/cash",

          },
        ],
      },
    ],
  },
  {
    name: "Accounting",
    icon: <ChartBarSquareIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "Jurnal Type",
            link: "/accounting/master/jurnal-type",
          },

          {
            name: "Coa Type",
            link: "/accounting/master/coa-type",
          },
          {
            name: "Chart Of Accounts",
            link: "/accounting/master/chart-of-accounts",
          },
        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Jurnal Entry",
            link: "/accounting/transaction/jurnal-entry",
          },
          {
            name: "Jurnal Memorial",
            link: "/accounting/transaction/jurnal-memorial",
          },
        ],
      },
      {
        name: "Setup",
        subMenus: [
          {
            name: "Opening Balance",
            link: "/accounting/setup/opening-balance",
          },
          {
            name: "Budget",
            link: "/accounting/setup/budget",
          },

        ],
      },

    ],
  },
  {
    name: "Setting",
    icon: <Cog6ToothIcon className="h-6 w-6 mr-4" strokeWidth={2} color="black" />,
    menus: [
      {
        name: "Master",
        subMenus: [
          {
            name: "User",
            link: "/setting/master/users",
          },

          {
            name: "Currency",
            link: "/setting/master/currency",
          },
          {
            name: "Currency Rate",
            link: "/setting/master/currency-rate",
          },
          {
            name: "Devision",
            link: "/setting/master/division",
          },
          {
            name: "Tax Currency",
            link: "/setting/master/tax-currency",
          },
          {
            name: "Top",
            link: "/setting/master/top",
          },

        ],
      },
      {
        name: "Transaction",
        subMenus: [
          {
            name: "Jurnal Entry",
            link: "/accounting/transaction/jurnal-entry",
          },
          {
            name: "Jurnal Memorial",
            link: "/accounting/transaction/jurnal-memorial",
          },
        ],
      },
      {
        name: "Setup",
        subMenus: [
          {
            name: "Opening Balance",
            link: "/accounting/setup/opening-balance",
          },
          {
            name: "Budget",
            link: "/accounting/setup/budget",
          },

        ],
      },

    ],
  },

];

export default SidebarMenuList;