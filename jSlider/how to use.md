 1. This jSlider is generated using a DIV tag. You will need a wrapper which has the class name `jSlider`
```
<div id="slider-example" class="jSlider">
  <div><img src="1.jpg" alt="" /></div>
  <div><img src="2.jpg" alt="" /></div>
  <div>
    <img src="3.jpg" alt="" />
    <div class="sub-content-sample">
      <p>Slide Content</p>
    </div>
  </div>
  <div><img src="4.jpg" alt="" /></div>
  <div><img src="5.jpg" alt="" /></div>
  <div><img src="6.jpg" alt="" /></div>
</div> 
```
2. You can customize the slider using the following data attributes:

**data-navigation:** Shows previous \/ next buttons. This can be set to `"always"`, "none" or `"hover"`. `"hover" `is set by default which means the buttons will appear when users move their mouse hover the slider. On mobile, "hover" is equal to "none".

**data-indicator:** Shows pagination bullets at the bottom of the slider. This can be set to `"always"`, `"none"` or `"hover"`. 
"always" is set by default. On mobile, `"hover"` is equal to `"none"`.

**data-speed:** Transition speed in milliseconds. The default value is `"500"`.

**data-delay:** Autoplay delay time between each transition of the slider in milliseconds. The default value is `"5000"`. \(5 seconds\). If you do not want the autoplay, set it to `"0"` \(zero\)

**data-transition:** Transition type of the slider. This can be set to "slide" (default) or `"fade"`. 

**data-loop:** Enable infinite loop. If set to `"true"`, when the slider reach to the end the next slide will be first slide. Vice versa.

**data-group:** Manages slide group. You will define the group of elements in each slide. This is a specialize property for gallery mode. In` "fade" `transition, the value is always `"1"`. The default value is` "1"`.
add those here: 

```
<div id="slider-example"  class="jSlider"  data-loop="true"  ata-navigation="always"   data-indicator="none">
```

3. If you want to have some nice \& simple animated content when a slide is active, add some special classes to the elements as shown below

```
<div id="slider-example" class="jSlider">
  <div><img src="1.jpg" alt="" /></div>
  <div class="selected">
    <h3 class="appear-top">This is the slide title!</h3>
    <h4 class="appear-right">This can be moved after the slide is showed...</h4>
    <p  class="appear-left">...in different directions...</p>
    <p  class="appear-bottom">...and with different animation effects</p>
    <h5 class="appear-fade">powered by jSlider!</h5>
    <img src="2.jpg" alt="" />
  </div>
  <div>
    <img src="3.jpg" alt="" />
    <div class="sub-content-sample">
      <p>Slide Content</p>
    </div>
  </div>
  <div><img src="4.jpg" alt="" /></div>
  <div><img src="5.jpg" alt="" /></div>
  <div><img src="6.jpg" alt="" /></div>
</div>
```

4. You can also initialize the plugin with optional settings using JavaScript:

```
$('#slider-example').sliderInit({
  'navigation': 'hover', 
  'indicator': 'always', 
  'speed': 500, 
  'delay': 5000, 
  'transition': 'slide', 
  'loop': false, 
  'group': 1
});
```


cource: https://www.jqueryscript.net/slider/Cross-Platform-Carousel-jSlider.html
