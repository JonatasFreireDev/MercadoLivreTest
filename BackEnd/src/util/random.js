export default function rand(arr, qnt) {
   const items = [];
   for (let i = 0; i < qnt; i++) {
      items[i] = arr[Math.floor(Math.random() * arr.length)];
   }
   return items;
}
