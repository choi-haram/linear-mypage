// let imgArray2020 = ['/image/2020_01_경주.jpeg','/image/2020_02_서울.jpeg'];

let imgArray2021 = ['/image/2021_01_경주.JPG','/image/2021_02_경주.JPG','/image/2021_03_부산.jpeg','/image/2021_04_대구.jpeg','/image/2021_05_단양.jpeg','/image/2021_06_단양.jpeg','/image/2021_07_단양.jpeg'];
a =0;
let imgArray2022 = ['/image/2022_01_제주.jpeg','/image/2022_02_서울.jpg','/image/2022_03_서울.jpeg','/image/2022_04_부산.jpg','/image/2022_05_경주.jpg'];
i =0;


function imageChange2021() {
    a++;
    if (a-1 == -1){
        document.getElementById("first_content_img").src =imgArray2021[6];
    } else {
        document.getElementById("first_content_img").src = imgArray2021[a-1];
    }
    document.getElementById("second_content_img").src = imgArray2021[a];
    if (a+1 == imgArray2021.length){
        document.getElementById("third_content_img").src =imgArray2021[0];
    } else {
        document.getElementById("third_content_img").src =imgArray2021[a+1];
    }
    if (a == imgArray2021.length - 1) {
        a = -1;
    }
}


function imageChange2022() {
    i++;
    document.getElementById("myImg").src = imgArray2022[i];
    if (i == imgArray2022.length - 1) {
        i = -1;
    }
}





















// let imgArray2020 = ['/image/2020_01_경주.jpeg','/image/2020_02_서울.jpeg'];
// let imgArray2021 = ['/image/2021_01_경주.JPG','/image/2021_02_경주.JPG','/image/2021_03_부산.jpeg','/image/2021_04_대구.jpeg','/image/2021_05_단양.jpeg','/image/2021_06_단양.jpeg','/image/2021_07_단양.jpeg'];
// let imgArray2022 = ['/image/2022_01_제주.jpeg','/image/2022_02_서울.jpg','/image/2022_03_서울.jpeg','/image/2022_04_부산.jpg','/image/2022_05_경주.jpg'];
// i =0;

// function imageChange2022() {
//     i++;
//     document.getElementById("myImg").src = imgArray2022[i];
//     if (i == imgArray2022.length - 1) {
//         i = -1;
//     }
// }

// function imageChange2020() {
//     i++;
//     document.getElementById("myImg").src = imgArray2020[i];
//     if (i == imgArray2020.length - 1) {
//         i = -1;
//     }
// }

// function imageChange2021() {
//     i++;
//     document.getElementById("myImg").src = imgArray2021[i];
//     if (i == imgArray2021.length - 1) {
//         i = -1;
//     }
// }
