Page({
  data: {
    originalList: [
      { id: 1, name: "张三", class: "2020届", graduationYear: "2020", imagePath: "/images/wx_1.jpg", gender: 0, department: "计算机与软件学院", city: "深圳市" },
      { id: 2, name: "李四", class: "2019届", graduationYear: "2019", imagePath: "/images/wx_1.jpg", gender: 0, department: "电子与信息工程学院", city: "广州市"},
      { id: 3, name: "樊顺琪", class: "2022届", graduationYear: "2022", imagePath: "/images/wx_1.jpg", gender: 0,  department: "计算机与软件学院", city: "深圳市"  },
      { id: 4, name: "樊顺琪", class: "2022届", graduationYear: "2022", imagePath: "/images/wx_1.jpg", gender: 0,  department: "计算机与软件学院", city: "深圳市"  },
      { id: 5, name: "樊顺琪", class: "2022届", graduationYear: "2022", imagePath: "/images/wx_1.jpg", gender: 0,  department: "计算机与软件学院", city: "深圳市"  }
    ],
    alumniList: [],
    searchQuery: '',
    categories: ['全部分类', '计算机', '金融'],
    selectedCategory: '全部分类',
  },
  onLoad() {
    this.setData({ alumniList: this.data.originalList }); // 初始化时显示所有校友
  },
  onSearch(e) {
    const query = e.detail.value;
    const filteredList = this.data.originalList.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setData({ alumniList: filteredList });
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },
  onFilterConfirm(e){
    console.log('筛选 => ', e.detail.selectedArray)
  },
  onMultiChange(e) {
    console.log('多项筛选 => ', e.detail.selectedArray)
  }
});
