## Basic Setup ##
```js
function() {
	createCanvas(800, 600);
	frameRate(30);
}
```

## Must Know Functions ##

#### ellipse(x, y, width, height)
畫橢圓用。
#### fill(color(r, g, b))
更改幾何圖形填充色。
#### stroke(color(r, g, b))
更改幾何圖形邊框色。
#### background(color(r, g, b))
用顏色填滿整個畫面。
#### noFill() 
不填色。
#### noStroke() 
不設邊框。
####translate(dx, dy) 
用於位移原點，即直接將座標做線性變換，方便好用。而且隨時可以切換回去。
#### frameRate(number)
設定每秒要有幾幅frame，愈高動畫愈精緻，但資源消耗愈多。

## Must Know Events

#### setup()
程式初始化時會執行一次

#### draw()
會無限執行下去，直到把程式關掉

#### mouseClicked()
當點一下滑鼠時會執行一次

## Must Know Predefined Variables

#### frameCount
會回傳現在程式跑到第幾幅（frame）

#### width
會回傳現在畫布的寬

#### height
回傳現在畫布的高

#### mouseX
回傳滑鼠現在的座標x值

#### mouseY
回傳滑鼠現在的座標y值

## Must Know Tools ##

-	[HSL Color Picker](http://hslpicker.com/)