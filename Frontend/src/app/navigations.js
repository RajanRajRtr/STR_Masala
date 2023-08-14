import { authRoles } from "app/auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
    auth: authRoles.sa, // ONLY SUPER ADMIN(SA) CAN ACCESS
  },
  // {
  //   name: "Analytics",
  //   path: "/dashboard/analytics",
  //   icon: "analytics",
  //   auth: authRoles.admin, // ONLY SUPER ADMIN(SA) AND ADMIN CAN ACCESS
  // },
  // {
  //   name: "Alternative",
  //   path: "/dashboard/alternative",
  //   icon: "analytics",
  // },
  // {
  //   name: "Inventory Management",
  //   path: "/dashboard/inventory-management",
  //   icon: "store",
  // },

  {
    name: "Customers",
    icon: "people",
    children: [
      { name: "Customer List", path: "/pages/customer-list", iconText: "CL" },
      { name: "View Customer", path: "/pages/view-customer", iconText: "VC" },
      { name: "New Customer", path: "/pages/new-customer", iconText: "NC" },
    ],
  },
  {
    name: "Products",
    icon: "shopping_cart",
    children: [
      { name: "Product List", path: "/pages/product-list", iconText: "PL" },
      { name: "View Product", path: "/pages/view-product", iconText: "VP" },
      { name: "New Product", path: "/pages/new-product", iconText: "NP" },
    ],
  },
  {
    name: "Orders",
    icon: "folder",
    children: [
      { name: "Order List", path: "/pages/order-list", iconText: "OL" },
      { name: "View Order", path: "/invoice/fdskfjdsuoiucrwevbgd", iconText: "VO" },
    ],
  },

  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" },
    ],
  },
  { name: "User Profile", path: "/page-layouts/user-profile", icon: "person" },
  { name: "Account", path: "/page-layouts/account", icon: "manage_accounts" },

  {
    name: "Ecommerce",
    icon: "shopping_basket",

    children: [
      { name: "Shop", path: "/ecommerce/shop", iconText: "S" },
      { name: "Cart", path: "/ecommerce/cart", iconText: "C" },
      { name: "Checkout", path: "/ecommerce/checkout", iconText: "CO" },
    ],
  },

  { name: "Invoice Builder", icon: "receipt", path: "/invoice/list" },
  { name: "CRUD Table", icon: "format_list_bulleted", path: "/crud-table" },


  
];

export const getfilteredNavigations = (navList = [], role) => {
  return navList.reduce((array, nav) => {
    if (nav.auth && nav.auth.includes(role)) {
      array.push(nav);
    } else {
      if (nav.children) {
        nav.children = getfilteredNavigations(nav.children, role);
        array.push(nav);
      }

      array.push(nav);
    }
    return array;
  }, []);
};
