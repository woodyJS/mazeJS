(function mazeGen(canvas, c, e) {	
    canvas = document.querySelector(canvas);
    var context = canvas.getContext("2d");
    canvas.width = 13 * c + 3;
    canvas.height = 13 * e + 3;
    context.fillStyle = "grey";
    context.fillRect(0, 0, 13 * c + 3, 13 * e + 3);  
    var a = [c]; 
    var t = [c];
    var k = [c];
        // Текущее множество
        q = 1;
    for (st = 0; st < e; st++) 
    {
        //принадлежнос ячейки в строке к  множеству        
        for (i = 0; i < c; i++) 
        {
         if  ( 0 == st)
            {
                a[i] = 0;
            }
                context.clearRect(13 * i + 3, 13 * st + 3, 10, 10);
                k[i] = 0; 
        if(1 == t[i])  
            {
                t[i] = a[i] = 0;
            }
        if (0 == a[i]) 
            {
                a[i] = q++;
            }
        }
        // cоздание  стенок справа и снизу
        for (i = 0; i < c; i++) 
        {
            k[i] = Math.floor(2 * Math.random());
            t[i] = Math.floor(2 * Math.random());
            
            if ((0 == k[i] || st == e - 1) && i != c - 1 && a[i + 1] != a[i]) 
            {
                var l = a[i + 1];
                for (j = 0; j < c; j++) if (a[j] == l && (a[j] = a[i]))
                {
                    context.clearRect(13 * i + 3, 13 * st + 3, 15, 10)
                }
            }
            if(st != e - 1 && 0 == t[i])  
            	{
                    context.clearRect(13 * i + 3, 13 * st + 3, 10, 15);
                }
        }
        // проверка
        for (i = 0; i < c; i++) 
        {
            var p = l = 0;
            for (j = 0; j < c; j++) 
            	if(a[i] == a[j] && 0 == t[j])
                {
            	   p++;
            	}else
                {
            	   l++;
            	} 
           if( 0 == p) 
                {   
                    t[i] = 0;
           	        context.clearRect(13 * i + 3, 13 * st + 3, 10, 15);
                }
        }
    }
    //  вход и выход 
    context.clearRect(13 * c, 13 * e - 10, 10, 10);
    context.clearRect(0 * c, 0 * e +3  , 10, 10);  

    document.getElementById("width1").onchange=function(event)
    { 
    c=event.target.value; 
        if (c>=4)
        {
            mazeGen("#canvas", c, e); 
        }else 
        {
            alert("Введите число > 4")
        }
            console.log(c); 
    }; 
    document.getElementById("height1").onchange=function(event)
    { 
    e=event.target.value; 
        if (e>=4)
        {
            mazeGen("#canvas", c, e);
        }else
        {
            alert("Введите число > 4")
        }
        console.log(e); 
    };


})("#canvas",30, 20);