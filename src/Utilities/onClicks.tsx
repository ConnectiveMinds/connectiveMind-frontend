import { contentArr } from "../Components/Explore";// function onLeftSwipe(i:number){
//     if (i > 0) {
//         let j = i;
//         i--;
//         contents.

//   }
// }

export function onRightSwipe() {
    console.log("swiped");
       contentArr.push({
         prevContent: { topic: "", description: "" },
         currentContent: { topic: "ABCD/e", description: "this is description" }
       });
       
}