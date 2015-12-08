/**
 * Created by tuananh on 12/7/15.
 */
var data = {
    'node': 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen',
    'php' : 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
};

var fs = require('fs');
fs.readFile('index.html', {encoding : 'utf8'}, function (err,result) {
    if (err) {
        return console.log(err);
    }
    function replace1(text, searchval, newval) {
        var k = [];
        b = [];
        a = 0;
        k.count = 0
        arr = text.split(" ");
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == searchval) {
                k.count++;
                k.position = i;
                k.word = arr[i];
                b.push(k.position);
            }
            var random = b[Math.floor(Math.random()*b.length)];
            while (a < (k.count)/3) {
                if (k.word.match(searchval)) {
                    a++;
                    arr[random] = arr[random].replace(k.word, newval);
                }
            }
        }
        var str = arr.join(" ").toString();

        return str ;
    }

    var str = replace1(result,"Node.js","<a href="+data.node+">Node</a>");
    var str1 = replace1(str,"PHP","<a href="+data.php+">PHP</a>")
    fs.writeFile('demo.html',"<meta charset='utf-8'>" +" "+ str1, function (err) {
        if(err){
            return console.log(err);
        }
        console.log('done');
    })
})

