# 音频和视频

本章主要探讨 HTML5 中音频和视频元素，通过这两个原生的媒体元素向 HTML 页面中嵌入音频和视频。

## 一.音频和视频概述

首先，我们要理解两个概念:容器(container)和编解码器(codec)。

### 1.视频容器

音频文件或视频文件，都只是一个容器文件。视频文件包含了音频轨道、视频轨道和其 他一些元数据。视频播放时，音频轨道和视频轨道是绑定在一起的。元数据包含了视频的封 面、标题、子标题、字幕等相关信息。主流视频容器支持的格式为:.avi、.flv、.mp4、.mkv、 .ogg、.webm。

### 2.编解码器

音频和视频编码/解码是一组算法，用来对一段特定音频或视频进行解码和编码，以便 音频和视频能够播放。原始的媒体文件体积非常巨大，如果不对其进行编码，那么数据量是 非常惊人的，在互联网上传播则要耗费无法忍受的时间;如果不对其进行解码，就无法将编 码后的数据重组为原始的媒体数据。主流的音频编解码器:AAC、MPEG-3、Ogg Voribs， 视频编解码器:H.264、VP8、Ogg Theora。

### 3.浏览器支持情况

起初，HTML5 规范本来打算指定编解码器，但实施起来极为困难。部分厂商已有自己的 标准，不愿实现标准;而有一些编解码器受专利保护，需要支付昂贵费用。最终放弃了统一 规范的要求，导致各个浏览器实现自己的标准。

除了上面三款浏览器，还有 Safari5+支持 MPEG-4,Opera11 支持 WebM 和 OGG，通过 这组数据，只要备好 MP4 和 OGG 格式的即可，但对于新的高清标准 WebM，当然是非常必要 的。因为 WebM 不但清晰度高，而且免费，不受限制许可的使用源码和专利权。

| 容器格式 | 视频编解码 | 音频编解码 | IE9+ | Firefox5+ | Chrome13+ |
| ---- | ---- | ---- | ---- | ---- | ---- |
| WebM | VP8 | Vorbis | × | √ | √ |
| OGG | Theora | Vorbis | × | √ | √ |
| MPEG-4 | H.264 | AAC | √ | × | 疑问? |

目前 Chrome 浏览器，为了推广 WebM 格式的视频。声称未来将放弃 H.264 编码的视频， 所以有可能在以后的版本中无法播放 MP4 的视频。当然，目前演示的版本还是支持的。

## 二.video 视频元素

以往的视频播放，需要借助 Flash 插件才可以实现。但 Flash 插件的不稳定性经常让
浏览器导致崩溃，因此很多浏览器或系统厂商开始抛弃它。而取代它的正是 HTML5 的 video 元素。

`<video>`元素的属性

| 属性名称 | 说明 |
| ---- | ---- |
| src | 视频资源的 URL |
| width | 视频宽度 |
| height | 视频高度 |
| autoplay | 设置后，表示立刻开始播放视频 |
| preload | 设置后，表示预先载入视频 |
| controls | 设置后，表示显示播放控件 |
| loop | 设置后，表示反复播放视频 |
| muted | 设置后，表示视频处于静音状态 |
| poster | 指定视频数据载入时显示的图片 |

### 1.嵌入一个 WebM 视频

```html
<video src="test.webm" width="800" height="600"></video>
```

解释:`<video>`插入一个视频，主流的视频为.webm，.mp4，.ogg 等。src 表示资源URL;width 表示宽度;height 表示高度。

### 2.附加一些属性

```html
<video src="test.webm" width="800" height="600" autoplay controls loop muted></video>
```

解释:autoplay 表示自动开始播放;controls 表示显示播放控件;loop 表示循环播 放;muted 表示静音。

### 3.预加载设置

```html
<video src="http://li.cc/test.webm" width="800" height="600" controls preload="none"></video>
```

解释:preload 属性有三个值:none 表示播放器什么都不加载;metadata 表示播放 之前只能加载元数据(宽高、第一帧画面等信息);auto 表示请求浏览器尽快下载整个视频。

### 4.使用预览图

```html
<video src="http://li.cc/test.webm" width="800" height="600" controls poster="img.png"></video>
```

解释:poster 属性表示在视频的第一帧，做一张预览图。

### 5.兼容多个浏览器

```html
<video width="800" height="600" controls poster="img.png">
<source src="test.webm">
<source src="test.mp4">
<source src="test.ogg">
<object>这里引入 flash 播放器实现 IE9 以下，但没必要了</object>
</video>
```

解释:通过`<source>`元素引入多种格式的视频，让更多的浏览器保持兼容。

## 二.audio 音频元素

和 video 元素一样，audio 元素用于嵌入音频内容，而音频元素的属性和视频元素类似。音频的支持度和视频类似，使用`<source>`元素引入多种格式兼容即可。主流的音频格 式有:.mp3，.m4a，.ogg，.wav。

| 属性名称 | 说明 |
| ---- | ---- |
| src | 视频资源的 URL |
| autoplay | 设置后，表示立刻开始播放视频 |
| preload | 设置后，表示预先载入视频 |
| controls | 设置后，表示显示播放控件 |

### 1.嵌入一个音频

```html
<audio src="test.mp3" controls autoplay></audio>
```

解释:和嵌入视频一个道理。

### 2.兼容多个浏览器

```html
<audio controls>
    <source src="test.mp3">
    <source src="test.m4a">
    <source src="test.wav">
</audio>
```

解释:略。

PS:更多设计到 API 的 JavaScript 控制，将在以后的基于 JavaScript 基础后讲解。

