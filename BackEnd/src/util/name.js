export default function getPartialName(name) {
   const name_arr = name.toLowerCase().split(' ');
   return [name_arr[0], name_arr[name_arr.length - 1]];
}
