var util = require('../../utils/util.js');
var api = require('../../config/api.js');
import { $wuxFilterBar } from '../../components/wuxfilterbar'
const app = getApp();


Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    newarr:{grade:'',subject:'',location:'',stuSex:'',teaSex:'',studyStatu:'',studyMethod:''},
    userInfo: {
      nickName: '点击登录',
      avatarUrl: '/static/images/avatar.png'
    },
    items: [
      {
        type: 'filter',
        label: '其他',
        value: 'filter',
        children: [
          {
            type: 'radio',
            label: '学生性别',
            value: 'stuSex',
            children: [{
              label: '不限',
              value: '不限',
            },
            {
              label: '男',
              value: '男',
            },
            {
              label: '女',
              value: '女',
            }],
          },
          {
            type: 'radio',
            label: '教员性别要求',
            value: 'teaSex',
            children: [{
              label: '不限',
              value: '不限',
            },
            {
              label: '男',
              value: '男',
            },
            {
              label: '女',
              value: '女',
            }],
          },
          {
            type: 'radio',
            label: '学生学习情况',
            value: 'studyStatu',
            children: [{
              label: '薄弱型',
              value: '薄弱型',
            },
            {
              label: '提高型',
              value: '提高型',
            },
            {
              label: '保持型',
              value: '保持型',
            }],
          },
          {
            type: 'radio',
            label: '补习方式',
            value: 'studyMethod',
            children: [{
              label: '教师上门',
              value: '教师上门',
            },
            {
              label: '学生上门',
              value: '学生上门',
            }],
          }
        ],
        groups: ['001', '002', '003'],//判断元素是否同组
      },
      
    ],
    tabTxt: ['年级', '科目', '区域'],//分类
    tab: [true, true, true],
    pinpaiList: [{ 'id': '1', 'title': '一年级' }, { 'id': '2', 'title': '二年级' },{ 'id': '3', 'title': '三年级' }, { 'id': '4', 'title': '四年级' },{ 'id': '5', 'title': '五年级' }, { 'id': '6', 'title': '六年级' },{ 'id': '7', 'title': '初一' }, { 'id': '8', 'title': '初二' },{ 'id': '9', 'title': '初三' }, { 'id': '10', 'title': '高一' },{ 'id': '11', 'title': '高二' }, { 'id': '12', 'title': '高三' }],
    pinpai_id: 0,//品牌
    pinpai_txt: '',
    jiage_id: 0,//价格
    jiage_ids:[{'id':'1','title':'小街镇'},{'id':'2','title':'嵩明'},{'id':'3','title':'四营'},{'id':'4','title':'杨林'},{'id':'5','title':'嵩阳街道'},{'id':'6','title':'小新街'}],
    jiage_txt: '',
    xiaoliang_ids:[{'id':'1','title':'语文'},{'id':'2','title':'数学'},{'id':'3','title':'英语'},{'id':'4','title':'物理'},{'id':'5','title':'化学'},{'id':'6','title':'生物'},
    {'id':'7','title':'历史'},{'id':'8','title':'政治'},{'id':'9','title':'地理'},{'id':'10','title':'音乐'},{'id':'11','title':'美术'},{'id':'12','title':'信息技术'}],
    xiaoliang_id: 0,//销量
    xiaoliang_txt: '',
    details: [
      {
        img: '/static/images/teacher.png',
        prix: '73',
        huxing: '3室2厅1卫',
        area: '128',
        price: '11456',
        chanquan: '产权',
        floor: '7/7',
        title: '大连市西岗区锦园小区48号楼2单元707',
        yongjin:'佣金1%，成交奖励奖励1万元',
        world: [
          {
            message: 'foo',
          },
          {
            message: 'bar'
          }
        ]
      },
      {
        img: '/static/images/teacher.png',
        prix: '73',
        huxing: '3室2厅1卫',
        area: '128',
        price: '11456',
        chanquan: '产权',
        floor: '7/7',
        title: '大连市西岗区锦园小区48号楼2单元707',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [
          {
            message: 'foo',
          },
          {
            message: 'bar'
          }
        ]
      },
      {
        img: '/static/images/teacher.png',
        prix: '73',
        huxing: '3室2厅1卫',
        area: '128',
        price: '11456',
        chanquan: '产权',
        floor: '7/7',
        title: '大连市西岗区锦园小区48号楼2单元707',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [
          {
            message: 'foo',
          },
          {
            message: 'bar'
          }
        ]
      }
 
    ],
  },
 
  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true], index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },
 
  //筛选项点击操作
  filter: function (e) {
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.data.newarr.grade = tabTxt[0];
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          pinpai_id: id,
          pinpai_txt: txt
        });
        console.log(self.data.newarr)
        break;
      case '1':
        tabTxt[1] = txt;
        self.data.newarr.subject = tabTxt[1];
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          jiage_id: id,
          jiage_txt: txt,
        });
        console.log(this.data.newarr)
        break;
      case '2':
        tabTxt[2] = txt;
        self.data.newarr.location = tabTxt[2];
        console.log(self.data.newarr)
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          xiaoliang_id: id,
          xiaoliang_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },
 
  //加载数据
  getDataList: function () {
    //调用数据接口，获取数据
    wx.showLoading({
      title: '数据正在加载中....',
      mask: true,
      success: (res) => {
        wx.showToast({ title: '数据获取成功' },3)
      },
      fail: (res) => {
        wx.showToast({ title: '系统错误' })
      },
      complete: (res) => {
        wx.hideLoading()
      },
    })
 
  },

  onShow:function(){
    if (app.globalData.hasLogin) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({
        userInfo: userInfo,
        hasLogin: true
      });
    }
  },

  onLoad() {
    self = this;
    this.$wuxFilterBar = $wuxFilterBar.init({
      items: this.data.items,
      onChange: (checkedItems, items) => {
        console.log(this, checkedItems, items)
        const params = {}
        checkedItems.forEach((n) => {
          if (n.value === 'filter') {
            n.children.filter((n) => n.selected).forEach((n) => {
              if(n.value == 'stuSex'){
                const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                params.stuSex = selected;
                var arr = params.stuSex;
                self.data.newarr.stuSex = arr;
              }else if(n.value == 'teaSex'){
                const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                params.teaSex = selected;
                var arr = params.teaSex;
                self.data.newarr.teaSex = arr;
              }else if(n.value == 'studyStatu'){
                const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                params.studyStatu = selected;
                var arr = params.studyStatu;
                self.data.newarr.studyStatu = arr;
              }else if(n.value == 'studyMethod'){
                const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                params.studyMethod = selected;
                var arr = params.studyMethod;
                self.data.newarr.studyMethod = arr;
            }
          })
         }        
        })
        console.log(self.data.newarr)
        self.getDataList();
      }
    })
 
  }
})