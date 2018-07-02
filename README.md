### EDT　VUE-CLI 模板

EDT 前端模板（ROUTER、VUEX、ELEMENT-UI、AXIOS等）使用时请全部下载

#### 关于ROUTER
1. 请将所有业务模块路径添加置 ``/main``的子路由中，``path``请勿带第一个斜杠，写法请参照模板
2. ``component``导入时，请使用懒加载方式:``component:resolve => require(['@/your component path'], resolve)``
3. 公有模块路由请与同事商榷后在进行操作

#### 关于VUEX

1. ``VUEX``相关代码位于``/src/utils/store.js``中，写法参考模板例子
2. 刷新VUEX失效问题使用``/src/utils/storage.js``解决

#### ELEMENT-UI
1. API请参考 [http://element-cn.eleme.io/#/zh-CN/component/installation]
2. ``components``中为常用的菜单、表格、分页等组件，使用方法以baseTable为例：
```
父组件：
    import baseTable from '../../components/baseTable'
    //···
    //···
    data() {
        return {
            tableData: {
                //流体缩减宽度，table流式布局
                flowWidth: Number,
                //table 表头数据数组，每个元素代表一列表头 必须键值
                title: [{
                    //绑定table数据的键值
                    prop: 'name',
                    //表头文本显示
                    label: '姓名',
                    //列宽度 不写均分
                    width: ''
                }],
                //是否需要行按钮
                btnFlag: Boolean,
                //行按钮列得宽度
                btnWidth: Number,
                btns: [
                        {
                          //handle传方法名称 自动接受参数scope 为row对象，handle均如此
                          handle: this.updateRow,
                          label: '修改'
                        },
                        {
                          handle: this.deleteRow,
                          label: '删除'
                        }
                      ],
                //table数据 其中键值必须与title中的prop相对应
                data: [{}]
            }
        }
    }
    components: {
      baseTable
    }
    //···
    //···

```
 
