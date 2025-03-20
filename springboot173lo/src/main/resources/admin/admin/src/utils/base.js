const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot173lo/",
            name: "springboot173lo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot173lo/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于springboot的招聘系统的设计与实现"
        } 
    }
}
export default base
