import axios from "axios";
import { create } from "zustand";
type storeType = {
  loading: boolean;
  datas: [];
  getDatas: () => void;
};
let allDatas = create<storeType>((set) => ({
  loading: true,
  datas: [],
  getDatas: async () => {
    try {
      let res = await axios.get(
        "https://65f258c5034bdbecc7649f36.mockapi.io/app/products"
      );
      let dat = await res.data;
      set(() => ({
        loading: false,
        datas: dat,
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
export default allDatas;
