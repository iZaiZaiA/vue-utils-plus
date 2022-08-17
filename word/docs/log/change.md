## <small>V1.0.1 (2022-08-17)</small>

* 修改 文本操作 的 `copyText` （拷贝复制文本） 方法 为 `setCopyText` （拷贝文本到剪切板），原 `execCommand` 方式的拷贝被浏览器逐步废弃，所以更换了新的`writeText`方式
* 新增 文本操作 的 `getCopyText` （取剪切板文本） 方法
* 新增 文本操作 的 `setPosInsert` （输入框插入内容） 方法，在输入框的光标位置插入内容
* 新增 文本操作 的 `setPosRange` （设置光标位置） 方法
* 新增 数据转换 的 `toParse` （字符串转数组或JSON） 方法


## <small>V1.0.0 (2022-08-13)</small>

* 新增 内容验证 的 `formValidate` （饿了么UI表单验证） 方法
* 新增 方法函数可直接引入使用，无需 `const` 声明
* 更换文档


## <small>V0.0.6 (2022-08-11)</small>

* 新增 数组操作 的 `ArrToOneObj` （数组转对象） 方法
* 新增 数组操作 的 `getOneObjValue` （取转换后的对象值） 方法
* 新增 数组操作 的 `isIndex` （二维数组中是否存在） 方法
* 新增 判断类型 的 `getArrValue` （取数组数据） 方法
* 新增 判断类型 的 `getObjValue` （取对象数据） 方法
* 新增 判断类型 的 `getObjNullValue` （取对象数据2） 方法


## <small>V0.0.5-beta.1 (2022-08-09)</small>

* 新增 文件处理 的 `base64ToFile` （base64转成文件） 方法


## <small>V0.0.5 (2022-08-02)</small>

* 新增 文件处理 的 `isSize` （文件大小） 方法
* 新增 数组操作 的 `arrFill` （创建数组） 方法
* 新增 数组操作 的 系统内置记录 文章
* 新增 文本操作 的 系统内置记录 文章


## <small>V0.0.4 (2022-07-31)</small>

* 首次正式发布
