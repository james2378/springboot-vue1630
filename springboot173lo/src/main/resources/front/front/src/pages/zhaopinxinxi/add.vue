<template>
<div :style='{"width":"100%","padding":"20px 7% 40px","margin":"0px auto","position":"relative","background":"none"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="岗位名称" prop="gangweimingcheng">
            <el-input v-model="ruleForm.gangweimingcheng" 
                placeholder="岗位名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}'  label="岗位类型" prop="gangweileixing">
            <el-select v-model="ruleForm.gangweileixing" placeholder="请选择岗位类型" >
              <el-option
                  v-for="(item,index) in gangweileixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="岗位要求" prop="gangweiyaoqiu">
            <el-input v-model="ruleForm.gangweiyaoqiu" 
                placeholder="岗位要求" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="学历要求" prop="xueliyaoqiu">
            <el-input v-model="ruleForm.xueliyaoqiu" 
                placeholder="学历要求" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="办公环境" v-if="type!='cross'" prop="bangonghuanjing">
            <file-upload
            tip="点击上传办公环境"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.bangonghuanjing?ruleForm.bangonghuanjing:''"
            @change="bangonghuanjingUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' class="upload" v-else label="办公环境" prop="bangonghuanjing">
                <img v-if="ruleForm.bangonghuanjing.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.bangonghuanjing.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.bangonghuanjing.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="岗位性质" prop="gangweixingzhi">
            <el-input v-model="ruleForm.gangweixingzhi" 
                placeholder="岗位性质" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="薪资待遇" prop="xinzidaiyu">
            <el-input v-model="ruleForm.xinzidaiyu" 
                placeholder="薪资待遇" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="工作经验" prop="gongzuojingyan">
            <el-input v-model="ruleForm.gongzuojingyan" 
                placeholder="工作经验" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="工作时间" prop="gongzuoshijian">
            <el-input v-model="ruleForm.gongzuoshijian" 
                placeholder="工作时间" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="就业城市" prop="jiuyechengshi">
            <el-input v-model="ruleForm.jiuyechengshi" 
                placeholder="就业城市" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="上班地点" prop="shangbandidian">
            <el-input v-model="ruleForm.shangbandidian" 
                placeholder="上班地点" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="企业编号" prop="qiyebianhao">
            <el-input v-model="ruleForm.qiyebianhao" 
                placeholder="企业编号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="联系人" prop="lianxiren">
            <el-input v-model="ruleForm.lianxiren" 
                placeholder="联系人" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="联系方式" prop="lianxifangshi">
            <el-input v-model="ruleForm.lianxifangshi" 
                placeholder="联系方式" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0"}' label="岗位介绍" prop="gangweijieshao">
            <editor 
                :style='{"minHeight":"300px","padding":"0","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"1px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.gangweijieshao" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#000000","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#aaaaaa","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          gangweimingcheng: '',
          gangweileixing: '',
          gangweiyaoqiu: '',
          xueliyaoqiu: '',
          bangonghuanjing: '',
          gangweixingzhi: '',
          xinzidaiyu: '',
          gongzuojingyan: '',
          gongzuoshijian: '',
          jiuyechengshi: '',
          shangbandidian: '',
          qiyebianhao: '',
          qiyemingcheng: '',
          lianxiren: '',
          lianxifangshi: '',
          gangweijieshao: '',
        },
        gangweileixingOptions: [],
        rules: {
          gangweimingcheng: [
            { required: true, message: '岗位名称不能为空', trigger: 'blur' },
          ],
          gangweileixing: [
            { required: true, message: '岗位类型不能为空', trigger: 'blur' },
          ],
          gangweiyaoqiu: [
          ],
          xueliyaoqiu: [
          ],
          bangonghuanjing: [
          ],
          gangweixingzhi: [
          ],
          xinzidaiyu: [
          ],
          gongzuojingyan: [
          ],
          gongzuoshijian: [
          ],
          jiuyechengshi: [
            { required: true, message: '就业城市不能为空', trigger: 'blur' },
          ],
          shangbandidian: [
          ],
          qiyebianhao: [
          ],
          qiyemingcheng: [
          ],
          lianxiren: [
          ],
          lianxifangshi: [
          ],
          gangweijieshao: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='gangweimingcheng'){
              this.ruleForm.gangweimingcheng = obj[o];
              continue;
            }
            if(o=='gangweileixing'){
              this.ruleForm.gangweileixing = obj[o];
              continue;
            }
            if(o=='gangweiyaoqiu'){
              this.ruleForm.gangweiyaoqiu = obj[o];
              continue;
            }
            if(o=='xueliyaoqiu'){
              this.ruleForm.xueliyaoqiu = obj[o];
              continue;
            }
            if(o=='bangonghuanjing'){
              this.ruleForm.bangonghuanjing = obj[o].split(",")[0];
              continue;
            }
            if(o=='gangweixingzhi'){
              this.ruleForm.gangweixingzhi = obj[o];
              continue;
            }
            if(o=='xinzidaiyu'){
              this.ruleForm.xinzidaiyu = obj[o];
              continue;
            }
            if(o=='gongzuojingyan'){
              this.ruleForm.gongzuojingyan = obj[o];
              continue;
            }
            if(o=='gongzuoshijian'){
              this.ruleForm.gongzuoshijian = obj[o];
              continue;
            }
            if(o=='jiuyechengshi'){
              this.ruleForm.jiuyechengshi = obj[o];
              continue;
            }
            if(o=='shangbandidian'){
              this.ruleForm.shangbandidian = obj[o];
              continue;
            }
            if(o=='qiyebianhao'){
              this.ruleForm.qiyebianhao = obj[o];
              continue;
            }
            if(o=='qiyemingcheng'){
              this.ruleForm.qiyemingcheng = obj[o];
              continue;
            }
            if(o=='lianxiren'){
              this.ruleForm.lianxiren = obj[o];
              continue;
            }
            if(o=='lianxifangshi'){
              this.ruleForm.lianxifangshi = obj[o];
              continue;
            }
            if(o=='gangweijieshao'){
              this.ruleForm.gangweijieshao = obj[o];
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.qiyebianhao!=''&&json.qiyebianhao){
                this.ruleForm.qiyebianhao = json.qiyebianhao
            }
            if(json.qiyemingcheng!=''&&json.qiyemingcheng){
                this.ruleForm.qiyemingcheng = json.qiyemingcheng
            }
            if(json.lianxiren!=''&&json.lianxiren){
                this.ruleForm.lianxiren = json.lianxiren
            }
            if(json.lianxifangshi!=''&&json.lianxifangshi){
                this.ruleForm.lianxifangshi = json.lianxifangshi
            }
          }
        });
        this.$http.get('option/gangweileixing/gangweileixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.gangweileixingOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('zhaopinxinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('zhaopinxinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('zhaopinxinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('zhaopinxinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      bangonghuanjingUploadChange(fileUrls) {
          this.ruleForm.bangonghuanjing = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 110px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 110px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
