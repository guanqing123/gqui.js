<a name="uploader"></a>

## uploader(selector, options)
uploader 上传组件

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selector | <code>string</code> |  | 上传组件的selector |
| options | <code>object</code> |  | 配置项 |
| [options.url] | <code>string</code> |  | 上传的url，返回值需要使用json格式 |
| [options.auto] | <code>boolean</code> | <code>true</code> | 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example |
| [options.type] | <code>string</code> | <code>&quot;file&quot;</code> | 上传类型, `file`为文件上传; `base64`为以base64上传 |
| [options.fileVal] | <code>string</code> | <code>&quot;file&quot;</code> | 文件上传域的name |
| [options.compress] | <code>object</code> |  | 压缩配置, `false`则不压缩 |
| [options.compress.width] | <code>number</code> | <code>1600</code> | 图片的最大宽度 |
| [options.compress.height] | <code>number</code> | <code>1600</code> | 图片的最大高度 |
| [options.compress.quality] | <code>number</code> | <code>.8</code> | 压缩质量, 取值范围 0 ~ 1 |
| [options.onBeforeQueued] | <code>function</code> |  | 文件添加前的回调，return false则不添加 |
| [options.onQueued] | <code>function</code> |  | 文件添加成功的回调 |
| [options.onBeforeSend] | <code>function</code> |  | 文件上传前调用，具体参数看example |
| [options.onSuccess] | <code>function</code> |  | 上传成功的回调 |
| [options.onProgress] | <code>function</code> |  | 上传进度的回调 |
| [options.onError] | <code>function</code> |  | 上传失败的回调 |

**Example**  
#### html
 <div class="weui-cells weui-cells_form" id="uploader">
     <div class="weui-cell">
         <div class="weui-cell__bd">
             <div class="weui-uploader">
                 <div class="weui-uploader__hd">
                     <p class="weui-uploader__title">图片上传</p>
                     <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
                 </div>
                 <div class="weui-uploader__bd">
                     <ul class="weui-uploader__files" id="uploaderFiles"></ul>
                     <div class="weui-uploader__input-box">
                         <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>