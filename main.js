    let num = +prompt("raqam kiriting")
    let jet = +prompt("darajani kiriting")
    if (isNaN(num)|| isNaN(jet)||num==0 || jet==0) {
      alert("Iltimos faqar raqam kiriting")
    }
    let war =1
    for (let i = 0; i < jet; ++i) {
        war=war*num
        console.log(war);
    }



