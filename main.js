    let num = +prompt("1-raqamni kiriting")
    let jet = +prompt("2-raqamni kiriting")
    if (isNaN(num)|| isNaN(jet)||num==0 || jet==0) {
      alert("Iltimos faqar raqam kiriting")
    }
    let war =1
    for (let i = 0; i < jet; ++i) {
        war=war*num
        console.log(war);
    }



