const mongoose = require("mongoose");
const Product = require("./models/Product"); // Update path if needed

// const ApiData = [
//   {
//     name: "Kids Blue & White Cotton Chequered Full Sleeves Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018700068_437Wx649H_202308112050251.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018700068_437Wx649H_202308112050332.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018700068_437Wx649H_202308112050293.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018700068_437Wx649H_202308112050374.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018700068_437Wx649H_202308112050355.jpeg",
//     price: 799,
//     old_price: 999,
//     price_off: 20,
//     category: "Shirt",
//     rating: 3.1,
//   },
//   {
//     name: "by Westside Off White & Black Abstract Printed T-Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020319584_437Wx649H_202312020634371.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020319584_437Wx649H_202312020634402.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020319584_437Wx649H_202312020634393.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020319584_437Wx649H_202312020634371.jpeg",
//     item_img_4: "",
//     price: 499,
//     old_price: 999,
//     price_off: 50,
//     category: "T-Shirt",
//     rating: 4.3,
//   },
//   {
//     name: "Junior Kids Khaki Cotton Regular Fit Trousers",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066442_437Wx649H_202311121822411.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066442_437Wx649H_202311121822432.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066442_437Wx649H_202311121822423.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066442_437Wx649H_202311121822444.jpeg",
//     item_img_4: "",
//     price: 799,
//     old_price: 999,
//     price_off: 20,
//     Stock: "Limited Stock!",
//     category: "Jeans",
//     rating: 3.5,
//   },
//   {
//     name: "Junior Kids Orange Cotton Regular Fit Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066423_437Wx649H_202311121821471.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066423_437Wx649H_202311121821462.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066423_437Wx649H_202311121821483.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020066423_437Wx649H_202311121821494.jpeg",
//     item_img_4: "",
//     price: 499,
//     old_price: 999,
//     price_off: 50,
//     category: "Shirt",
//     rating: 3.8,
//   },
//   {
//     name: "Junior Kids Blue Printed Jeans",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994904_437Wx649H_202311090019081.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994904_437Wx649H_202311090019042.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994904_437Wx649H_202311090018553.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994904_437Wx649H_202311090019004.jpeg",
//     item_img_4: "",
//     price: 899,
//     old_price: 1999,
//     price_off: 50,
//     category: "Jeans",
//     rating: 4.5,
//   },
//   {
//     name: "Colors of Benetton Kids White Solid T-Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019796263_437Wx649H_202310241647101.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019796263_437Wx649H_202310241647132.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019796263_437Wx649H_202310241647093.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019796263_437Wx649H_202310241647101.jpeg",
//     item_img_4: "",
//     price: 1274,
//     old_price: 1499,
//     price_off: 15,
//     category: "T-Shirt",
//     rating: 3.8,
//   },
//   {
//     name: " Kids Blue & White Printed Full Sleeves Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020173833_437Wx649H_202311211318531.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020173833_437Wx649H_202311211318572.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020173833_437Wx649H_202311211318583.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020173833_437Wx649H_202311211318531.jpeg",
//     item_img_4: "",
//     price: 851,
//     old_price: 895,
//     price_off: 5,
//     category: "Shirt",
//     rating: 2.8,
//   },
//   {
//     name: "Kids Olive Solid Joggers",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019486573_437Wx649H_202310021020531.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019486573_437Wx649H_202310021021002.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019486573_437Wx649H_202310021020573.jpeg",
//     item_img_3: "",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019486573_437Wx649H_202310021020531.jpeg",
//     price: 1529,
//     old_price: 1699,
//     price_off: 10,
//     category: "Jeans",
//     rating: 3.4,
//   },
//   {
//     name: " Spiderman Printed Off White T-Shirt For Boys",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020305236_437Wx649H_202312011636271.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020305236_437Wx649H_202312011636262.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020305236_437Wx649H_202312011636313.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020305236_437Wx649H_202312011636304.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020305236_437Wx649H_202312011636235.jpeg",
//     price: 719,
//     old_price: 899,
//     price_off: 20,
//     category: "T-Shirt",
//     rating: 2.8,
//   },
//   {
//     name: " Lifestyle Kids Multicolor Cotton Chequered Full Sleeves Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019759791_437Wx649H_202310210224531.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019759791_437Wx649H_202310210224572.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019759791_437Wx649H_202310210224583.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019759791_437Wx649H_202310210224494.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019759791_437Wx649H_202310210224555.jpeg",
//     price: 808,
//     old_price: 899,
//     price_off: 10,
//     category: "Shirt",
//     rating: 3.7,
//   },
//   {
//     name: "Kids Prep Green Cotton Regular Fit Trousers",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019773957_437Wx649H_202310211452081.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019773957_437Wx649H_202310211452132.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019773957_437Wx649H_202310211452113.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019773957_437Wx649H_202310211452081.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019773957_437Wx649H_202310211452132.jpeg",
//     price: 2589,
//     old_price: 3699,
//     price_off: 30,
//     category: "Jeans",
//     rating: 4.5,
//   },
//   {
//     name: " Embellished Full Sleeves Kurta with Pyjamas",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020135356_437Wx649H_202311182108381.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020135356_437Wx649H_202311182108392.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020135356_437Wx649H_202311182108363.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020135356_437Wx649H_202311182108334.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020135356_437Wx649H_202311182108415.jpeg",
//     price: 1500,
//     old_price: 2999,
//     price_off: 50,
//     category: "Ethetic-Wear",
//     rating: 4.8,
//   },
//   {
//     name: "Junior Red & White Cotton Striped Polo T-Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019833946_437Wx649H_202310272143171.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019833946_437Wx649H_202310272143202.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019833946_437Wx649H_202310272143183.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019833946_437Wx649H_202310272143183.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019833946_437Wx649H_202310272143194.jpeg",
//     price: 599,
//     old_price: 999,
//     price_off: 40,
//     category: "T-Shirt",
//     rating: 3.2,
//   },
//   {
//     name: "Kids by Westside Abstract Printed Light Beige Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020075247_437Wx649H_202311131829421.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020075247_437Wx649H_202311131829442.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020075247_437Wx649H_202311131829453.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020075247_437Wx649H_202311131829421.jpeg",
//     item_img_4: "",
//     price: 699,
//     old_price: 999,
//     price_off: 30,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Kids Turquoise Self Design Full Sleeves",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019247303_437Wx649H_202309142248201.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019247303_437Wx649H_202309142248172.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019247303_437Wx649H_202309142248163.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019247303_437Wx649H_202309142248224.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019247303_437Wx649H_202309142248215.jpeg",
//     price: 999,
//     old_price: 1999,
//     price_off: 50,
//     category: "Ethetic-Wear",
//     rating: 3.5,
//   },
//   {
//     name: "TABARD Kids Blue Printed Kurta",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014626747_437Wx649H_202209241909231.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014626747_437Wx649H_202209241909252.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014626747_437Wx649H_202209241909183.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014626747_437Wx649H_202209241909224.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014626747_437Wx649H_202209241909205.jpeg",
//     price: 999,
//     old_price: 1999,
//     price_off: 50,
//     category: "Ethetic-Wear",
//     rating: 3.8,
//   },
//   {
//     name: "Kids Black Cotton Chequered Full Sleeves Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020275880_437Wx649H_202311301312181.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020275880_437Wx649H_202311301312092.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020275880_437Wx649H_202311301312143.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020275880_437Wx649H_202311301312154.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020275880_437Wx649H_202311301312125.jpeg",
//     price: 1149,
//     old_price: 1500,
//     Stock: "Limited Stock!",
//     price_off: 20,
//     category: "Shirt",
//     rating: 2.8,
//   },
//   {
//     name: " Jony Kids Blue Printed Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018241318_437Wx649H_202307061703231.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018241318_437Wx649H_202307061703222.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018241318_437Wx649H_202307061703213.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018241318_437Wx649H_202307061703231.jpeg",
//     item_img_4: "",
//     price: 719,
//     old_price: 1199,
//     price_off: 40,
//     category: "Shirt",
//     rating: 2.5,
//   },
//   {
//     name: " Kids Yellow Color Block T-Shirt",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014222833_437Wx649H_202210292106051.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014222833_437Wx649H_202210292106072.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014222833_437Wx649H_202210292106093.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014222833_437Wx649H_202210292106114.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014222833_437Wx649H_202210292106035.jpeg",
//     price: 384,
//     old_price: 699,
//     price_off: 45,
//     category: "T-Shirt",
//     rating: 3.5,
//   },
//   {
//     name: "Junior Kids Grey Regular Fit Jeans",
//     wearType: "KidsWear",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994885_437Wx649H_202311090017551.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994885_437Wx649H_202311090018152.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994885_437Wx649H_202311090017513.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019994885_437Wx649H_202311090018004.jpeg",
//     item_img_4: "",
//     price: 899,
//     old_price: 999,
//     price_off: 10,
//     category: "Jeans",
//     rating: 2.9,
//   },
// ];

// const ApiData = [
//   {
//     name: " Dark Olive Regular Fit Cotton Shirt",
//     wearType: "MensWear",
//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854587_437Wx649H_202303151507211.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854587_437Wx649H_202303151507312.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854587_437Wx649H_202303151507283.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854587_437Wx649H_202303151507304.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854587_437Wx649H_202303151507335.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Dusty Pink Regular Fit Cotton Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854452_437Wx649H_202303151502161.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854452_437Wx649H_202303151502152.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854452_437Wx649H_202303151502223.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854452_437Wx649H_202303151502194.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854452_437Wx649H_202303151502205.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Olive Regular Fit Cotton Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854606_437Wx649H_202303151508201.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854606_437Wx649H_202303151508222.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854606_437Wx649H_202303151508343.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854606_437Wx649H_202303151508364.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854606_437Wx649H_202303151508325.jpeg",
//     price: 719,
//     old_price: 3599,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "  Black Full Sleeves Solid Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285060_437Wx649H_202111280548251.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285060_437Wx649H_202111280548272.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285060_437Wx649H_202111280548283.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285060_437Wx649H_202111280548304.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285060_437Wx649H_202111280548315.jpeg",
//     price: 2399,
//     old_price: 3999,
//     price_off: 40,
//     category: "Jacket",
//     rating: 2.9,
//   },
//   {
//     name: " Westside Beige & Black Checked Slim Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019410648_437Wx649H_202309260147221.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019410648_437Wx649H_202309260147283.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019410648_437Wx649H_202309260147352.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019410648_437Wx649H_202309260147221.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019410648_437Wx649H_202309260147283.jpeg",
//     price: 1499,
//     old_price: 2999,
//     price_off: 50,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Leather Retail Brown Full Sleeves Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285012_437Wx649H_202111280546001.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285012_437Wx649H_202111280546022.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285012_437Wx649H_202111280546043.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285012_437Wx649H_202111280546054.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011285012_437Wx649H_202111280546065.jpeg",
//     price: 2699,
//     old_price: 3999,
//     price_off: 33,
//     category: "Jacket",
//     rating: 2.9,
//   },

//   {
//     name: "Westside White Zig Zag Printed Relaxed Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019563746_437Wx649H_202310081148081.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019563746_437Wx649H_202310081148102.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019563746_437Wx649H_202310081148073.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019563746_437Wx649H_202310081148114.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019563746_437Wx649H_202310081148081.jpeg",
//     price: 999,
//     old_price: "",
//     Stock: "Limited Stock!",
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Light Yellow Fit Cotton Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854348_437Wx649H_202303151458131.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854348_437Wx649H_202303151458152.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854348_437Wx649H_202303151458173.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854348_437Wx649H_202303151458194.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016854348_437Wx649H_202303151458115.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Leather Retail Black Striped Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284869_437Wx649H_202111280538181.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284869_437Wx649H_202111280538192.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284869_437Wx649H_202111280538213.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284869_437Wx649H_202111280538224.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284869_437Wx649H_202111280538245.jpeg",
//     price: 2399,
//     old_price: 3999,
//     price_off: 40,
//     category: "Jacket",
//     rating: 2.9,
//   },

//   {
//     name: " Navy Regular Fit Cotton Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361187_437Wx649H_202302032329031.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361187_437Wx649H_202302032329012.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361187_437Wx649H_202302032328593.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361187_437Wx649H_202302032329024.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361187_437Wx649H_202302032329065.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " WES Casuals by Westside White Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016701819_437Wx649H_202303141340591.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016701819_437Wx649H_202303141340522.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016701819_437Wx649H_202303141340483.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016701819_437Wx649H_202303141340564.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016701819_437Wx649H_202303141340591.jpeg",
//     price: 1299,
//     old_price: 2000,
//     Stock: "Limited Stock!!",
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Leather Retail Black Faux Leather Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284957_437Wx649H_202111280543071.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284957_437Wx649H_202111280543082.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284957_437Wx649H_202111280543103.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284957_437Wx649H_202111280543114.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011284957_437Wx649H_202111280543135.jpeg",
//     price: 2099,
//     old_price: 3999,
//     price_off: 48,
//     category: "Jacket",
//     rating: 2.9,
//   },

//   {
//     name: "Sutra Navy Solid Windcheater Bomber Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612662_437Wx649H_202112302141261.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612662_437Wx649H_202112302141272.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612662_437Wx649H_202112302141283.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612662_437Wx649H_202112302141294.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612662_437Wx649H_202112302141315.jpeg",
//     price: 800,
//     old_price: 1999,
//     Stock: "",
//     price_off: 60,
//     category: "Jacket",
//     rating: 2.9,
//   },
//   {
//     name: " White Cotton Slim Fit Printed Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013801964_437Wx649H_202207160616231.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013801964_437Wx649H_202207160616252.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013801964_437Wx649H_202207160616263.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013801964_437Wx649H_202207160616284.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013801964_437Wx649H_202207160616295.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Benetton Blue Linen Slim Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999211_437Wx649H_202306171934201.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999211_437Wx649H_202306171934172.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999211_437Wx649H_202306171934183.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999211_437Wx649H_202306171934224.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999211_437Wx649H_202306171934235.jpeg",
//     price: 1859,
//     old_price: 2999,
//     price_off: 38,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Arrow Rust Cotton Slim Fit Checks Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016521121_437Wx649H_202302141654551.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016521121_437Wx649H_202302141654492.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016521121_437Wx649H_202302141654523.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016521121_437Wx649H_202302141654504.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016521121_437Wx649H_202302141654575.jpeg",
//     price: 1428,
//     old_price: 2599,
//     price_off: 45,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Allen Solly White Linen Slim Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018435761_437Wx649H_202307231752221.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018435761_437Wx649H_202307231752232.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018435761_437Wx649H_202307231752243.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018435761_437Wx649H_202307231752254.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018435761_437Wx649H_202307231752215.jpeg",
//     price: 3044,
//     old_price: 3499,
//     price_off: 13,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Duke Rust Full Sleeves Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598309_437Wx649H_202112291745451.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598309_437Wx649H_202112291745492.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598309_437Wx649H_202112291745503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598309_437Wx649H_202112291745524.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598309_437Wx649H_202112291745535.jpeg",
//     price: 1299,
//     old_price: 2599,
//     price_off: 50,
//     category: "Jacket",
//     rating: 2.9,
//   },
//   {
//     name: "Being Human Black Slim Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016907311_437Wx649H_202303181804201.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016907311_437Wx649H_202303181804132.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016907311_437Wx649H_202303181804103.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016907311_437Wx649H_202303181804084.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016907311_437Wx649H_202303181804165.jpeg",
//     price: 895,
//     old_price: 2799,
//     price_off: 68,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Multicolor Slim Fit Striped Cotton Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017193988_437Wx649H_202304132040141.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017193988_437Wx649H_202304132040122.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017193988_437Wx649H_202304132040153.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017193988_437Wx649H_202304132040174.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017193988_437Wx649H_202304132040115.jpeg",
//     price: 1996,
//     old_price: 2495,
//     price_off: 20,
//     category: "Shirt",
//     rating: 2.9,
//   },

//   {
//     name: "Maroon Cotton Regular Fit Checks Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019971943_437Wx649H_202311072351031.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019971943_437Wx649H_202311072351052.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019971943_437Wx649H_202311072351063.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019971943_437Wx649H_202311072351014.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019971943_437Wx649H_202311072351085.jpeg",
//     price: 3199,
//     Stock: "Limited Stock!",
//     price_off: 60,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Blue Cotton Regular Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019972189_437Wx649H_202311080001091.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019972189_437Wx649H_202311080001102.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019972189_437Wx649H_202311080001123.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019972189_437Wx649H_202311080001074.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019972189_437Wx649H_202311080001135.jpeg",
//     price: 2999,
//     Stock: "Limited Stock!",
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: " Duke Brown Full Sleeves Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598228_437Wx649H_202112291741321.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598228_437Wx649H_202112291741342.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598228_437Wx649H_202112291741353.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598228_437Wx649H_202112291741374.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011598228_437Wx649H_202112291741385.jpeg",
//     price: 2639,
//     old_price: 4399,
//     price_off: 40,
//     category: "Jacket",
//     rating: 2.9,
//   },
//   {
//     name: " SHOWOFF Navy Blue Slim Fit Checks Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019827161_437Wx649H_202310271648411.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019827161_437Wx649H_202310271648392.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019827161_437Wx649H_202310271648423.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019827161_437Wx649H_202310271648454.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019827161_437Wx649H_202310271648385.jpeg",
//     price: 952,
//     old_price: 2380,
//     price_off: 60,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Dark Green Regular Fit Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047122.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047093.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047144.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047195.jpeg",
//     price: 1839,
//     old_price: 2299,
//     price_off: 20,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Levi's Blue Relaxed Fit Floral Print Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019345428_437Wx649H_202309221412141.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019345428_437Wx649H_202309221412112.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019345428_437Wx649H_202309221412133.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019345428_437Wx649H_202309221412164.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019345428_437Wx649H_202309221412155.jpeg",
//     price: 2319,
//     old_price: 2899,
//     price_off: 20,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "Campus Sutra Maroon Full Sleeves Jacket",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612517_437Wx649H_202112302132571.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612517_437Wx649H_202112302132582.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612517_437Wx649H_202112302132593.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612517_437Wx649H_202112302133004.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011612517_437Wx649H_202112302133015.jpeg",
//     price: 1400,
//     old_price: 3999,
//     price_off: 65,
//     category: "Jacket",
//     rating: 2.9,
//   },
//   {
//     name: "Pepe Jeans KINGSMAN Aqua Regular Fit Linen Shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161544161.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543532.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543564.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161544125.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Shirt",
//     rating: 2.9,
//   },
//   {
//     name: "T-shirt",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161544161.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543532.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543564.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161544125.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "T-Shirt",
//   },
//   {
//     name: "Pants",
//     wearType: "MensWear",

//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543532.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161543564.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016551529_437Wx649H_202302161544125.jpeg",
//     price: 679,
//     old_price: 3399,
//     price_off: 80,
//     category: "Pants",
//   },
// ];

// const ApiData = [
//   {
//     wearType: "Shoes",
//     name: "Men's Black Casual Sneaker",
//     main_img:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861333_437Wx649H_202306080142441.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861333_437Wx649H_202306080142412.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861333_437Wx649H_202306080142453.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861333_437Wx649H_202306080142405.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861333_437Wx649H_202306080142426.jpeg",
//     price: 1399,
//     old_price: 5599,
//     price_off: 75,
//     category: "Mens",
//     rating: 2.9,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's White Casual Sneaker",
//     main_img:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861338_437Wx649H_202306080142511.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861338_437Wx649H_202306080142482.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861338_437Wx649H_202306080142493.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861338_437Wx649H_202306080142524.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861338_437Wx649H_202306080142465.jpeg",
//     price: 1119,
//     old_price: 5599,
//     price_off: 80,
//     category: "Mens",
//     rating: 4.0,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Red Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019298736_437Wx649H_202309171315021.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019298736_437Wx649H_202309171314502.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019298736_437Wx649H_202309171314453.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019298736_437Wx649H_202309171315094.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019298736_437Wx649H_202309171314555.jpeg",
//     price: 1770,
//     old_price: 5899,
//     price_off: 70,
//     category: "Mens",
//     rating: 3.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Black Casual Sneaker",
//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613562_437Wx649H_202302211708351.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613562_437Wx649H_202302211708312.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613562_437Wx649H_202302211708363.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613562_437Wx649H_202302211708324.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613562_437Wx649H_202302211708345.jpeg",
//     price: 1159,
//     old_price: 5799,
//     price_off: 80,
//     category: "Mens",
//     rating: 2.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's off White Casual Sneaker",
//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613520_437Wx649H_202302211706371.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613520_437Wx649H_202302211706332.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613520_437Wx649H_202302211706323.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613520_437Wx649H_202302211706354.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613520_437Wx649H_202302211706365.jpeg",
//     price: 1119,
//     old_price: 5599,
//     price_off: 80,
//     category: "Mens",
//     rating: 4.7,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Gray Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019198775_437Wx649H_202309130159421.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019198775_437Wx649H_202309130159392.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019198775_437Wx649H_202309130159443.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019198775_437Wx649H_202309130159414.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019198775_437Wx649H_202309130159405.jpeg",
//     price: 1680,
//     old_price: 5599,
//     price_off: 70,
//     category: "Mens",
//     rating: 2.0,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Blue Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861355_437Wx649H_202306080143461.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861355_437Wx649H_202306080143422.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861355_437Wx649H_202306080143483.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861355_437Wx649H_202306080143414.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017861355_437Wx649H_202306080143435.jpeg",
//     price: 1119,
//     old_price: 5599,
//     price_off: 80,
//     category: "Mens",
//     rating: 3.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's white Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018915339_437Wx649H_202308252222001.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018915339_437Wx649H_202308252222062.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018915339_437Wx649H_202308252222113.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018915339_437Wx649H_202308252221554.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018915339_437Wx649H_202308252221515.jpeg",
//     price: 1419,
//     old_price: 7099,
//     price_off: 80,
//     category: "Mens",
//     rating: 1.5,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018349087_437Wx649H_202307152350251.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018349087_437Wx649H_202307152350262.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018349087_437Wx649H_202307152350233.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018349087_437Wx649H_202307152350214.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018349087_437Wx649H_202307152350245.jpeg",
//     price: 1099,
//     old_price: 5499,
//     price_off: 80,
//     category: "Mens",
//     rating: 3.5,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Flex rate Black Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018866787_437Wx649H_202308221800471.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018866787_437Wx649H_202308221800492.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018866787_437Wx649H_202308221800503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018866787_437Wx649H_202308221800514.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018866787_437Wx649H_202308221800485.jpeg",
//     price: 1479,
//     old_price: 4499,
//     price_off: 67,
//     category: "Mens",
//     rating: 2.9,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Black Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253518_437Wx649H_202307071909391.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253518_437Wx649H_202307071909362.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253518_437Wx649H_202307071909353.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253518_437Wx649H_202307071909374.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253518_437Wx649H_202307071909385.jpeg",
//     price: 1139,
//     old_price: 5699,
//     price_off: 80,
//     category: "Mens",
//     rating: 4.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Black Ankle High Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253475_437Wx649H_202307071907541.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253475_437Wx649H_202307071907512.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253475_437Wx649H_202307071907503.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253475_437Wx649H_202307071907524.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018253475_437Wx649H_202307071907535.jpeg",
//     price: 1199,
//     old_price: 5599,
//     price_off: 80,
//     category: "Mens",
//     rating: 2.8,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Smashic White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016283449_437Wx649H_202301300621022.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016283449_437Wx649H_202301300621011.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016283449_437Wx649H_202301300621033.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016283449_437Wx649H_202301300621054.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016283449_437Wx649H_202301300620555.jpeg",
//     price: 2019,
//     old_price: 4499,
//     price_off: 55,
//     category: "Mens",
//     rating: 3.6,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's unisex R78 white Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008500221_437Wx649H_202112101748341.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008500221_437Wx649H_202112101748352.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008500221_437Wx649H_202112101748363.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008500221_437Wx649H_202112101748404.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008500221_437Wx649H_202112101748425.jpeg",
//     price: 1999,
//     old_price: 4999,
//     price_off: 60,
//     category: "Mens",
//     rating: 4.6,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Brown Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018432253_437Wx649H_202307230204021.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018432253_437Wx649H_202307230203582.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018432253_437Wx649H_202307230204003.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018432253_437Wx649H_202307230204014.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018432253_437Wx649H_202307230204045.jpeg",
//     price: 2147,
//     old_price: 4295,
//     price_off: 50,
//     category: "Mens",
//     rating: 1.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's ANDERS White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000014696851_437Wx649H_202306020454101.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000014696851_437Wx649H_202306020454122.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000014696851_437Wx649H_202306020454073.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000014696851_437Wx649H_202306020454094.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i11/437Wx649H/MP000000014696851_437Wx649H_202306020454135.jpeg",
//     price: 3120,
//     old_price: 4799,
//     price_off: 35,
//     category: "Mens",
//     rating: 4.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's shuffle V3 Better White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016764387_437Wx649H_202303052132311.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016764387_437Wx649H_202303052132222.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016764387_437Wx649H_202303052132183.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016764387_437Wx649H_202303052132264.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016764387_437Wx649H_202303052132365.jpeg",
//     price: 1399,
//     old_price: 5599,
//     price_off: 75,
//     category: "Mens",
//     rating: 3.2,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's Camel Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019926469_437Wx649H_202311022128041.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019926469_437Wx649H_202311022128052.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019926469_437Wx649H_202311022128073.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019926469_437Wx649H_202311022128064.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019926469_437Wx649H_202311022128035.jpeg",
//     price: 1871,
//     old_price: 2495,
//     price_off: 25,
//     category: "Mens",
//     rating: 2.7,
//   },
//   {
//     wearType: "Shoes",
//     name: " Men's ROJAS 2.0 White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019353289_437Wx649H_202309222310171.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019353289_437Wx649H_202309222310152.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019353289_437Wx649H_202309222310143.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019353289_437Wx649H_202309222310164.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019353289_437Wx649H_202309222310195.jpeg",
//     price: 1799,
//     old_price: 4499,
//     price_off: 60,
//     category: "Mens",
//     rating: 3.1,
//   },
//   {
//     wearType: "Shoes",
//     name: "Men's White Casual Sneakers",
//     main_img:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013222113_437Wx649H_202205221249391.jpeg",
//     item_img_1:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013222113_437Wx649H_202205221249422.jpeg",
//     item_img_2:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013222113_437Wx649H_202205221249433.jpeg",
//     item_img_3:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013222113_437Wx649H_202205221249454.jpeg",
//     item_img_4:
//       "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013222113_437Wx649H_202205221249391.jpeg",
//     price: 1039,
//     old_price: 5199,
//     price_off: 80,
//     category: "Mens",
//     rating: 4.5,
//   },
// ];

const ApiData = [
  {
    wearType: "WomensWear",
    name: " Westside Lime Green Striped A-Line Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020086842_437Wx649H_202311150348471.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020086842_437Wx649H_202311150348462.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020086842_437Wx649H_202311150348483.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020086842_437Wx649H_202311150348444.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020086842_437Wx649H_202311150348471.jpeg",
    price: 1299,
    Stock: "Limited offer!",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.3,
  },
  {
    wearType: "WomensWear",
    name: "W Coral Embroidered Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016540961_437Wx649H_202302160000001.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016540961_437Wx649H_202302160000372.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016540961_437Wx649H_202302152359573.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016540961_437Wx649H_202302152359594.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016540961_437Wx649H_202302152359565.jpeg",
    price: 759,
    old_price: "1899",
    price_off: "60% Off",
    category: "Kurta",
    rating: 3.2,
  },
  {
    wearType: "WomensWear",
    name: "Biba Blue Cotton Printed Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016134763_437Wx649H_202301202255591.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016134763_437Wx649H_202301202256012.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016134763_437Wx649H_202301202255574.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016134763_437Wx649H_202301202255565.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016134763_437Wx649H_202301202256026.jpeg",
    price: 1339,
    old_price: "1999",
    price_off: "30% Off",
    category: "Kurta",
    rating: 2.6,
  },
  {
    wearType: "WomensWear",
    name: " Green Zardozi Embroidered Kurta ",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019791007_437Wx649H_202310231115361.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019791007_437Wx649H_202310231115372.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019791007_437Wx649H_202310231115333.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019791007_437Wx649H_202310231115354.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019791007_437Wx649H_202310231115361.jpeg",
    price: 3799,
    old_price: "",
    price_off: "50% Off",
    category: "Kurta",
    rating: 3.6,
  },
  {
    wearType: "WomensWear",
    name: "Blue A Line Kurta With Shrug",
    main_img:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010827024_437Wx649H_202110070125011.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010827024_437Wx649H_202110070125432.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010827024_437Wx649H_202110070127394.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010827024_437Wx649H_202110070129325.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010827024_437Wx649H_202110070130296.jpeg",
    price: 1679,
    old_price: "3599",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.9,
  },
  {
    wearType: "WomensWear",
    name: "Blue Embroidered Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013386113_437Wx649H_202206110947041.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013386113_437Wx649H_202206110947072.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013386113_437Wx649H_202206110947113.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013386113_437Wx649H_202206110947144.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000013386113_437Wx649H_202206110947175.jpeg",
    price: 1299,
    old_price: "2599",
    price_off: "50% Off",
    category: "Kurta",
    rating: 4.2,
  },
  {
    wearType: "WomensWear",
    name: "W Yellow Printed A Line Kurta",
    main_img:
      "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354109_437Wx649H_202304260054111.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354109_437Wx649H_202304260054072.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354109_437Wx649H_202304260054103.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354109_437Wx649H_202304260054144.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017354109_437Wx649H_202304260054135.jpeg",
    price: 1234,
    old_price: "1899",
    price_off: "35% Off",
    category: "Kurta",
    rating: 3.8,
  },
  {
    wearType: "WomensWear",
    name: " Maroon Embroidered Fit & Flare Kurta",
    main_img:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011683527_437Wx649H_202201061128371.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011683527_437Wx649H_202201061128382.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011683527_437Wx649H_202201061128404.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011683527_437Wx649H_202201061128425.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011683527_437Wx649H_202201061128371.jpeg",
    price: 1799,
    old_price: "3599",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.6,
  },
  {
    wearType: "WomensWear",
    name: " Globus Maroon Embroidered Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020213002_437Wx649H_202311232032281.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020213002_437Wx649H_202311232032322.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020213002_437Wx649H_202311232032303.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020213002_437Wx649H_202311232032264.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020213002_437Wx649H_202311232032195.jpeg",
    price: 1274,
    old_price: "1699",
    price_off: "25% Off",
    category: "Kurta",
    rating: 2.9,
  },
  {
    wearType: "WomensWear",
    name: "Globus White & Blue Cotton Printed Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020212929_437Wx649H_202311232029551.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020212929_437Wx649H_202311232029592.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020212929_437Wx649H_202311232030013.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020212929_437Wx649H_202311232029514.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020212929_437Wx649H_202311232029586.jpeg",
    price: 1124,
    old_price: "1499",
    price_off: "25% Off",
    category: "Kurta",
    rating: 3.1,
  },
  {
    wearType: "WomensWear",
    name: " Pink Embroidered Straight Kurti",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020107108_437Wx649H_202311160500071.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020107108_437Wx649H_202311160500152.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020107108_437Wx649H_202311160500123.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020107108_437Wx649H_202311160500135.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020107108_437Wx649H_202311160500166.jpeg",
    price: 989,
    old_price: "1999",
    price_off: "51% Off",
    category: "Kurta",
    rating: 3.8,
  },
  {
    wearType: "WomensWear",
    name: "Kurti Embroidered Straight Blue Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118408_437Wx649H_202311172024581.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118408_437Wx649H_202311172025032.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118408_437Wx649H_202311172025003.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118408_437Wx649H_202311172025024.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118408_437Wx649H_202311172025055.jpeg",
    price: 1649,
    old_price: "3299",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.9,
  },
  {
    wearType: "WomensWear",
    name: " Biba Beige Printed A Line Kurta",
    main_img:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009671821_437Wx649H_202105300510201.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009671821_437Wx649H_202105300510212.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009671821_437Wx649H_202105300510223.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009671821_437Wx649H_202105300510244.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009671821_437Wx649H_202105300510255.jpeg",
    price: 1299,
    old_price: "2599",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.3,
  },
  {
    wearType: "WomensWear",
    name: "Olive Green Geometric Print Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014403962_437Wx649H_202209100520061.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014403962_437Wx649H_202209100520072.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014403962_437Wx649H_202209100520104.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014403962_437Wx649H_202209100520104.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014403962_437Wx649H_202209100520136.jpeg",
    price: 849,
    old_price: "1699",
    price_off: "50% Off",
    category: "Kurta",
    rating: 3.6,
  },
  {
    wearType: "WomensWear",
    name: "W Green & Pink Printed A Line Kurta",
    main_img:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014190806_437Wx649H_202208210000401.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014190806_437Wx649H_202208210000422.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014190806_437Wx649H_202208210000464.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014190806_437Wx649H_202208210000495.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014190806_437Wx649H_202208210000516.jpeg",
    price: 949,
    old_price: "1899",
    price_off: "50% Off",
    category: "Kurta",
    rating: 3.8,
  },
  {
    wearType: "WomensWear",
    name: "Biba Green Cotton Printed Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856181_437Wx649H_202306072118331.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856181_437Wx649H_202306072118362.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856181_437Wx649H_202306072118394.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856181_437Wx649H_202306072118385.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017856181_437Wx649H_202306072118316.jpeg",
    price: 1199,
    old_price: "1999",
    price_off: "40% Off",
    category: "Kurta",
    rating: 2.4,
  },
  {
    wearType: "WomensWear",
    name: " Jaipur Kurti Red Cotton Printed Angrakha Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118418_437Wx649H_202311172025071.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118418_437Wx649H_202311172025112.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118418_437Wx649H_202311172025133.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118418_437Wx649H_202311172025154.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020118418_437Wx649H_202311172025145.jpeg",
    price: 1299,
    old_price: "2599",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.9,
  },
  {
    wearType: "WomensWear",
    name: " Purple Geometric Print Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014404246_437Wx649H_202209100552081.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014404246_437Wx649H_202209100552102.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014404246_437Wx649H_202209100552134.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014404246_437Wx649H_202209100552145.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014404246_437Wx649H_202209100552156.jpeg",
    price: 899,
    old_price: "1799",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.8,
  },
  {
    wearType: "WomensWear",
    name: " Aurelia Grey Cotton Printed Straight Kurta",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200970_437Wx649H_202311230420181.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200970_437Wx649H_202311230420212.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200970_437Wx649H_202311230420203.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200970_437Wx649H_202311230420254.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200970_437Wx649H_202311230420245.jpeg",
    price: 1599,
    Stock: "Limited Stock!",
    price_off: "50% Off",
    category: "Kurta",
    rating: 2.5,
  },
  {
    wearType: "WomensWear",
    wearType: "WomensWear",
    name: "Aurelia Off-White Straight Short Kurti",
    main_img:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200968_437Wx649H_202311230420231.jpeg",
    item_img_1:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200968_437Wx649H_202311230420202.jpeg",
    item_img_2:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200968_437Wx649H_202311230420193.jpeg",
    item_img_3:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200968_437Wx649H_202311230420214.jpeg",
    item_img_4:
      "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020200968_437Wx649H_202311230420255.jpeg",
    price: 759,
    old_price: "1899",
    price_off: "60% Off",
    category: "Kurta",
    rating: 3.6,
  },
];

mongoose
  .connect("mongodb://localhost:27017/sellerListShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.insertMany(ApiData);
  })
  .then(() => {
    console.log("Products added successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
  });
