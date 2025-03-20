<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"padding":"30px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3020)","borderRadius":"0","flexWrap":"wrap","background":"#fff","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="100px"
		>
			<template >
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="岗位名称" prop="gangweimingcheng">
					<el-input v-model="ruleForm.gangweimingcheng" placeholder="岗位名称" clearable  :readonly="ro.gangweimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="岗位名称" prop="gangweimingcheng">
					<el-input v-model="ruleForm.gangweimingcheng" placeholder="岗位名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="岗位类型" prop="gangweileixing">
					<el-select :disabled="ro.gangweileixing" v-model="ruleForm.gangweileixing" placeholder="请选择岗位类型" >
						<el-option
							v-for="(item,index) in gangweileixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="岗位类型" prop="gangweileixing">
					<el-input v-model="ruleForm.gangweileixing"
						placeholder="岗位类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="岗位要求" prop="gangweiyaoqiu">
					<el-input v-model="ruleForm.gangweiyaoqiu" placeholder="岗位要求" clearable  :readonly="ro.gangweiyaoqiu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="岗位要求" prop="gangweiyaoqiu">
					<el-input v-model="ruleForm.gangweiyaoqiu" placeholder="岗位要求" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="学历要求" prop="xueliyaoqiu">
					<el-input v-model="ruleForm.xueliyaoqiu" placeholder="学历要求" clearable  :readonly="ro.xueliyaoqiu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="学历要求" prop="xueliyaoqiu">
					<el-input v-model="ruleForm.xueliyaoqiu" placeholder="学历要求" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.bangonghuanjing" label="办公环境" prop="bangonghuanjing">
					<file-upload
						tip="点击上传办公环境"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.bangonghuanjing?ruleForm.bangonghuanjing:''"
						@change="bangonghuanjingUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.bangonghuanjing" label="办公环境" prop="bangonghuanjing">
					<img v-if="ruleForm.bangonghuanjing.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.bangonghuanjing.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.bangonghuanjing.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="岗位性质" prop="gangweixingzhi">
					<el-input v-model="ruleForm.gangweixingzhi" placeholder="岗位性质" clearable  :readonly="ro.gangweixingzhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="岗位性质" prop="gangweixingzhi">
					<el-input v-model="ruleForm.gangweixingzhi" placeholder="岗位性质" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="薪资待遇" prop="xinzidaiyu">
					<el-input v-model="ruleForm.xinzidaiyu" placeholder="薪资待遇" clearable  :readonly="ro.xinzidaiyu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="薪资待遇" prop="xinzidaiyu">
					<el-input v-model="ruleForm.xinzidaiyu" placeholder="薪资待遇" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="工作经验" prop="gongzuojingyan">
					<el-input v-model="ruleForm.gongzuojingyan" placeholder="工作经验" clearable  :readonly="ro.gongzuojingyan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="工作经验" prop="gongzuojingyan">
					<el-input v-model="ruleForm.gongzuojingyan" placeholder="工作经验" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="工作时间" prop="gongzuoshijian">
					<el-input v-model="ruleForm.gongzuoshijian" placeholder="工作时间" clearable  :readonly="ro.gongzuoshijian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="工作时间" prop="gongzuoshijian">
					<el-input v-model="ruleForm.gongzuoshijian" placeholder="工作时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="就业城市" prop="jiuyechengshi">
					<el-input v-model="ruleForm.jiuyechengshi" placeholder="就业城市" clearable  :readonly="ro.jiuyechengshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="就业城市" prop="jiuyechengshi">
					<el-input v-model="ruleForm.jiuyechengshi" placeholder="就业城市" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="上班地点" prop="shangbandidian">
					<el-input v-model="ruleForm.shangbandidian" placeholder="上班地点" clearable  :readonly="ro.shangbandidian"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="上班地点" prop="shangbandidian">
					<el-input v-model="ruleForm.shangbandidian" placeholder="上班地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业编号" prop="qiyebianhao">
					<el-input v-model="ruleForm.qiyebianhao" placeholder="企业编号" clearable  :readonly="ro.qiyebianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="企业编号" prop="qiyebianhao">
					<el-input v-model="ruleForm.qiyebianhao" placeholder="企业编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" clearable  :readonly="ro.qiyemingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系人" prop="lianxiren">
					<el-input v-model="ruleForm.lianxiren" placeholder="联系人" clearable  :readonly="ro.lianxiren"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="联系人" prop="lianxiren">
					<el-input v-model="ruleForm.lianxiren" placeholder="联系人" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="岗位介绍" prop="gangweijieshao">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.gangweijieshao" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"33.3%","margin":"0 0 20px 0"}' v-else-if="ruleForm.gangweijieshao" label="岗位介绍" prop="gangweijieshao">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.gangweijieshao"></span>
                </el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0","background":"#2EB1FD","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				gangweimingcheng : false,
				gangweileixing : false,
				gangweiyaoqiu : false,
				xueliyaoqiu : false,
				bangonghuanjing : false,
				gangweixingzhi : false,
				xinzidaiyu : false,
				gongzuojingyan : false,
				gongzuoshijian : false,
				jiuyechengshi : false,
				shangbandidian : false,
				qiyebianhao : false,
				qiyemingcheng : false,
				lianxiren : false,
				lianxifangshi : false,
				gangweijieshao : false,
			},
			
			
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
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='gangweimingcheng'){
							this.ruleForm.gangweimingcheng = obj[o];
							this.ro.gangweimingcheng = true;
							continue;
						}
						if(o=='gangweileixing'){
							this.ruleForm.gangweileixing = obj[o];
							this.ro.gangweileixing = true;
							continue;
						}
						if(o=='gangweiyaoqiu'){
							this.ruleForm.gangweiyaoqiu = obj[o];
							this.ro.gangweiyaoqiu = true;
							continue;
						}
						if(o=='xueliyaoqiu'){
							this.ruleForm.xueliyaoqiu = obj[o];
							this.ro.xueliyaoqiu = true;
							continue;
						}
						if(o=='bangonghuanjing'){
							this.ruleForm.bangonghuanjing = obj[o];
							this.ro.bangonghuanjing = true;
							continue;
						}
						if(o=='gangweixingzhi'){
							this.ruleForm.gangweixingzhi = obj[o];
							this.ro.gangweixingzhi = true;
							continue;
						}
						if(o=='xinzidaiyu'){
							this.ruleForm.xinzidaiyu = obj[o];
							this.ro.xinzidaiyu = true;
							continue;
						}
						if(o=='gongzuojingyan'){
							this.ruleForm.gongzuojingyan = obj[o];
							this.ro.gongzuojingyan = true;
							continue;
						}
						if(o=='gongzuoshijian'){
							this.ruleForm.gongzuoshijian = obj[o];
							this.ro.gongzuoshijian = true;
							continue;
						}
						if(o=='jiuyechengshi'){
							this.ruleForm.jiuyechengshi = obj[o];
							this.ro.jiuyechengshi = true;
							continue;
						}
						if(o=='shangbandidian'){
							this.ruleForm.shangbandidian = obj[o];
							this.ro.shangbandidian = true;
							continue;
						}
						if(o=='qiyebianhao'){
							this.ruleForm.qiyebianhao = obj[o];
							this.ro.qiyebianhao = true;
							continue;
						}
						if(o=='qiyemingcheng'){
							this.ruleForm.qiyemingcheng = obj[o];
							this.ro.qiyemingcheng = true;
							continue;
						}
						if(o=='lianxiren'){
							this.ruleForm.lianxiren = obj[o];
							this.ro.lianxiren = true;
							continue;
						}
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='gangweijieshao'){
							this.ruleForm.gangweijieshao = obj[o];
							this.ro.gangweijieshao = true;
							continue;
						}
				}
				
















			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(json.qiyebianhao!=''&&json.qiyebianhao && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyebianhao = json.qiyebianhao
						this.ro.qiyebianhao = true;
					}
					if(json.qiyemingcheng!=''&&json.qiyemingcheng && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyemingcheng = json.qiyemingcheng
						this.ro.qiyemingcheng = true;
					}
					if(json.lianxiren!=''&&json.lianxiren && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxiren = json.lianxiren
						this.ro.lianxiren = true;
					}
					if(json.lianxifangshi!=''&&json.lianxifangshi && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxifangshi = json.lianxifangshi
						this.ro.lianxifangshi = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/gangweileixing/gangweileixing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.gangweileixingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zhaopinxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.gangweijieshao = this.ruleForm.gangweijieshao.replace(reg,'../../../springboot173lo/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {










	if(this.ruleForm.bangonghuanjing!=null) {
		this.ruleForm.bangonghuanjing = this.ruleForm.bangonghuanjing.replace(new RegExp(this.$base.url,"g"),"");
	}























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "zhaopinxinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    bangonghuanjingUploadChange(fileUrls) {
	    this.ruleForm.bangonghuanjing = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #000;
	  	  font-weight: 500;
	  	  width: 100px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 100px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
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
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
