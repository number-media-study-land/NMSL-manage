import Vue from "vue";
import {
  Input,
  Button,
  Message,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Header,
  Aside,
  Main,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Loading
} from "element-ui";

Vue.use(Input);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Loading);
Vue.prototype.$message = Message;
