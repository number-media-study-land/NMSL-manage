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
  Main
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
Vue.prototype.$message = Message;
